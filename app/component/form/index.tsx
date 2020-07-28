import React, { ReactElement, useState } from 'react'
import Input from './Input'
import { FormItemProps, FormProps, ITEMVALUE } from "./Interface"
import { INPUTTYPE } from './config'
import { Button } from "antd-mobile"
import style from "./style.scss"

function returnComponent(item: FormItemProps, onChange: Function) {
    let component: ReactElement = null;
    switch (item.type) {
        case INPUTTYPE:
            component = <Input {...{ ...item, onChange }} />;
            break;
    }
    return component
}




function Form(props: FormProps) {
    const { itemArr, submitText } = props;
    const [useParams,setParams] = useState({})

    function submit() {
        console.log(itemArr,useParams)
    }
    function onChange(value: ITEMVALUE, item: FormItemProps) {
        itemArr.map(option => {
            if (option.label === item.label) {
                setParams({...useParams,[item.paramName]:value})
            }
        })
    }
    return <div className={style.formBox}>
        <form>
            {itemArr.map(item => returnComponent(item, onChange))}
        </form>
        <div className={style.submit}>
            <Button onClick={submit} type="primary">{submitText || '保存'}</Button>
        </div>
    </div>
}


export default Form