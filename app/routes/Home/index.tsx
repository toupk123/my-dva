import React, { useState } from "react";
import { connectHook } from "../../../react-redux/index"
import styles from './style.scss';
import Statistics from './statistics'
import PurposeList from './purposeList'
import { appModel, HomeState } from "../../interface/app"

function Home(props: HomeState) {
  return <div className={styles.homeBody}>
    <Statistics />
    <div className={styles.homeContent}>
      <PurposeList list={props.purposeListParams.list} />
    </div>
  </div>
}

export default connectHook((state: appModel) => {
  const { home } = state
  return {
    purposeListParams: home.purposeListParams
  }
})(Home)


