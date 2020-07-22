export function createStore(reducer, initState = {}, heightener) {
  if (heightener && typeof heightener === 'function') {
    return heightener(createStore)(reducer);
  }
  let currentState = {
    ...initState
  }

  let observers = [];
  function getState() {
    return currentState
  }
  function dispatch(action) {
    if (typeof action === "function") {
      action(dispatch, currentState)
    } else {
      currentState = reducer(currentState, action)
      observers.map(fn => fn())
    }
  }

  function subscribe(fn) {
    observers.push(fn)
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}


export function applyMiddleware(...middlewares) {
  return (createStore, initState) => reducer => {
    const store = createStore(reducer, initState)
    let { getState, dispatch } = store;
    let params = {
      getState,
      dispatch: (action) => dispatch(action)
    }
    const middlewareArr = middlewares.map(item => item(params))
    dispatch = compose(...middlewareArr)(dispatch)
    return { ...store, dispatch }
  }
}

function compose(...fns) {
  if (fns.length === 0) return arg => arg
  if (fns.length === 1) return fns[0]
  
  return fns.reduce((res, cur) => (...args) => res(cur(...args)))
}
