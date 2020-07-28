import React from 'react';
import styles from './style.scss';
import { NavBar, Icon } from 'antd-mobile'

function Statistics() {
    return <div className={styles.statistics}>
        <NavBar
            mode="dark"
            icon={<Icon type="left" />}
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            ]}
        ></NavBar>
    </div>
}



export default Statistics