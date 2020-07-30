import React, { useState } from "react";
import { Tabs } from "antd-mobile"
import { homeTabs } from "../config"
import My from './my';
import Home from './home'
import Board from './board'
import style from "../styles/app.scss"
import '../assets/icon/iconfont.css'
import { useHistory } from "react-router-dom"


function System() {
  const history = useHistory()
  function addTask() {
    history.push("/createTask")
  }
  return <div className={style.systemBox} onClick={addTask}>
    <i className="icon iconfont iconico-system"></i>
  </div>
}

function App(props) {
  return <div className={style.body}>
    <Tabs
      initialPage={props.initialPage}
      tabs={homeTabs}
      tabBarPosition="bottom"
    >
      <div className={style.content}>
        <Home />
      </div>
      <div className={style.content}>
        <Board />
      </div>
      <div className={style.content}>
        <My />
      </div>
    </Tabs>
    <System />
  </div>
}

export default App



