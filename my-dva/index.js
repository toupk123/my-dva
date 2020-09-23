import { create } from "./create"
import document from "global/document"
import ReactDOM from "react-dom"
import { Provider } from "../react-redux/index"
import React from 'react';
import { createHashHistory } from "history"

export default function dva() {
  let app = create();
  let storeStart = app.start

  app.router = router
  app.use = use
  app.start = start
  app._history = patchHistory(createHashHistory())

  function start(container) {
    if (isString(container)) {
      container = document.querySelector(container);
    }

    (app?._store)??storeStart()
   /* if (!(app?._store)) {
      storeStart()
    }*/

    if (container) {
      render(container, app, app._store)
    } else {
    }
  }
  function router(routers) {
    app._router = routers
  }
  return app
}


function use() {

}


function patchHistory(history) {
  const oldliten = history.listen
  history.listen = callback => {
    // 在路由变化时，进行一些操作
    oldliten.call(history, callback)
  }
  return history
}


function getProvider(app, store) {
  return () => <Provider store={store}>
    {app._router({ history: app._history })}
  </Provider>
}

function render(container, app, store) {
  ReactDOM.render(React.createElement(getProvider(app, store)), container)
}

function isString(str) {
  return typeof str === 'string'
}