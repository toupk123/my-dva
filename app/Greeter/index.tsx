import React from 'react';
import styles from './style.scss';
import { createStore, applyMiddleware } from "../../redux"
import { Provider, connect } from "../../react-redux"

function reducer(state, action) {
  switch (action.type) {
    case "TYPE":
      return state = { ...state, ss1: 12 };
      break;
  }
}

class S extends React.Component {
  click() {
    this.props.dispatch({ type: 'TYPE' })
    console.log(this.props.getState())
  }
  render() {
    return <div onClick={() => this.click()}>?111111111111</div>
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

const Sa = connect(mapStateToProps)(S)

function Test() {
  const dispatchLog = () => next => action => {
    console.log('进入log2')
    let result = next(action)
    console.log('离开log2', result)
    return result
  }

  const dispatchLog2 = () => next => action => {
    console.log('进入log3')
    let result = next(action)
    console.log('离开log3', result)
    return result
  }

  const store = createStore(reducer, { s2: 12 }, applyMiddleware(dispatchLog, dispatchLog2))
  return <Provider store={store}>
    <Sa />
  </Provider>
}



export default Test;
