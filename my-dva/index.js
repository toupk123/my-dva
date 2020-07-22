import { create } from "./create"
import document from "global/document"
import ReactDOM from "react-dom"
import { Provider } from "../react-redux"
import React from 'react';
import { createHashHistory } from "history"

export default function dva() {
  let app = create();
  app._history = patchHistory(createHashHistory())

  function start(container) {
    if (isString(container)) {
      container = document.querySelector(container);
    }
    if (container) {
      render(container, app, app._store)
    } else {

    }
  }
  function router(routers) {
    app._router = routers()
  }

  app.router = router
  app.use = use
  app.start = start
  return app
}


function use() {

}


function patchHistory(history) {
  history.listen = callback => {

  }
  return history
}


function getProvider(app, store) {
  return ()=><Provider store={store}>
    {app._router({ history: app._history })}
  </Provider>
}

function render(container, app, store) {
  ReactDOM.render(React.createElement(getProvider(app, store)), container)
}


function isString(str) {
  return typeof str === 'string'
}