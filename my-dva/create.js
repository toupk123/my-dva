import { createStore } from "../redux"
import { combineReducers } from 'redux';

const DVANAMESPACE = "/"


export function create() {
  let app = {
    model: model,
    _models: [],
  }

  function model(models) {
    if (!models.namespace) {
      Object.keys(models).map(key => {
        let model = prefixNamespace({ ...models[key] })
        app._models.push(model)
      }) // 这里根据传入model类型
    } else {
      let model = prefixNamespace({ ...models })
      app._models.push(model)
    }
    const reducers = combineReducers(createReducer())
    app._store = createStore(
      reducers,
    )
  }

  function createReducer() {
    const reducers = {}
    for (const m of app._models) {
      reducers[m.namespace] = getReducer(m);
    }
    return reducers
  }

  return app
}



function getReducer(m) {
  return (state, action) => {
    return handleAction(m, action,state)
  }
}


function handleAction(m, action,defaultState={}) {
  let newState = {}
  Object.keys(m.reducers).map(item => {
    if (item === action.type) {
      newState = m.reducers[item](m.state, action)
    }
  })
  return { ...defaultState,...m.state, ...newState }
}



function prefixNamespace(obj) {
  obj.reducers = Object.keys(obj.reducers).reduce((memo, key) => {
    const newKey = `${obj.namespace}${DVANAMESPACE}${key}`;
    memo[newKey] = obj.reducers[key]
    return memo;
  }, {});
  return obj
}