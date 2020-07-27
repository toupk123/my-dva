import React, { ReactElement } from 'react'
import Input from './Input'
import { FormItemProps, FormProps, } from "./Interface"
import { INPUTTYPE } from './config'
import { Button } from "antd-mobile"
import style from "./style.scss"

function returnComponent(item: FormItemProps) {
    let component: ReactElement = null;
    switch (item.type) {
        case INPUTTYPE:
            component = <Input />;
            break;
    }
    return component
}


function Form(props: FormProps) {
    const { itemArr, submitText } = props
    function submit(){
        
    }
    return <div className={style.formBox}>
        <form>
            {itemArr.map(item => returnComponent(item))}
        </form>
        <div className={style.submit}>
            <Button onClick={submit} type="primary">{submitText || '保存'}</Button>
        </div>
    </div>
}


export default Form