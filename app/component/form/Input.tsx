import React, { useState, useEffect } from 'react'
import { List, InputItem } from 'antd-mobile';
import style from "./style.scss";
import { InputProps } from "./Interface"

function Input(props: InputProps) {
    const [useValue, setValue] = useState(props.defaultValue)
    function onChange(v) {
        setValue(v)
        props.onChange && props.onChange(v, props)
    }


    return <div className={style.inputBox}>
        <List>
            <InputItem type="text" onChange={onChange} value={String(useValue || '')} >
                {props.label}
            </InputItem>
        </List>

    </div>
}

export default Input