import React, { useState } from "react";
import { connectHook } from "../../../react-redux/index"
import style from "../../styles/app.scss"
import Form from "../../component/form"
import {formItemArr} from "../../config"

function Home(props) {
  return <div className={style.body}>
    <Form itemArr={formItemArr}/>
  </div>
}

export default connectHook((state) => {
  const { home } = state
  return {
    initialPage: home.initialPage
  }
})(Home)


