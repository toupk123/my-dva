import React from 'react';
import styles from "./style.scss"
import BgProgress from "../../component/BgProgress"

interface PurposeItemProps {
    title: string,
    subText: string,
    time: string
}

export interface PurposeListProps {
    list: PurposeItemProps[]
}

const BgProgressProps = { width: '20%', bgColor: 'rgb(10 131 226 / 20%)' }

function PurposeItem(props: PurposeItemProps) {
    return <BgProgress {...BgProgressProps}>
        <div className={styles.purposeItem}>
            <div className={styles.purposeTitle}>
                <div className={styles.purposeTitleH1}>{props.title}</div>
                <div>{props.subText}</div>
            </div>
            <div className={styles.purposeTime}>
                {props.time}
            </div>
        </div>
    </BgProgress>
}

function PurposeList(props: PurposeListProps) {
    return <React.Fragment>
        {props.list.map(item => <PurposeItem key={item.title} {...item} />)}
    </React.Fragment>

}


export default PurposeList