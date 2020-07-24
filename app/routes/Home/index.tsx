import React, { useState } from "react";
import { connectHook } from "../../../react-redux/index"
import { Tabs } from "antd-mobile"
import { homeTabs } from "./config"
import My from '../my';

function Home(props) {
  return <div>
    <Tabs
      initialPage={props.initialPage}
      tabs={homeTabs}
      tabBarPosition="bottom"
    >
      <My />
    </Tabs>
  </div>
}

export default connectHook((state) => {
  const { home } = state
  return {
    initialPage: home.initialPage
  }
})(Home)


