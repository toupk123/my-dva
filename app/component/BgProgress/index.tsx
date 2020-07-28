import React, { ReactElement } from 'react';
import styles from './style.scss'

export interface BgProgressProps {
    bgColor?: string,
    children?: ReactElement,
    width?: string
}

const defaultProps = { bgColor: '#108ee9', width: '0' }


function BgProgress(props: BgProgressProps = defaultProps) {
    let BgProgressProps = { ...defaultProps, ...props }
    return <div className={styles.BgProgress} >
        <div className={styles.bgProgressWidth} style={{ width: `${BgProgressProps.width}`, backgroundColor: BgProgressProps.bgColor }}></div>
        <div style={{ position: 'relative' }}>{BgProgressProps.children}</div>
    </div>
}

export default BgProgress