import React, { useState } from "react";
import { Tabs } from "antd-mobile"
import { homeTabs } from "../config"

import My from './my';
import Home from './home'
import Board from './board'
const style = require('../styles/app.scss')

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
  </div>
}

export default App



