import React, { useState } from "react";
import Form from "../../component/form"
import styles from "./style.scss"
import Create from "./Create"
import { FormItemProps } from "../../component/form/Interface"
import { connectHook } from "../../../react-redux"
import { Toast } from "antd-mobile"
import { useHistory } from "react-router-dom"

const defaultForm: FormItemProps[] = []
const configForm: FormItemProps[] = [{
    label: "主题",
    type: 'input',
    value: "",
    paramName: "title"
},{
    label: "备注",
    type: 'input',
    value: "",
    paramName: "subText"
},{
    label: "花费时间",
    type: 'input',
    value: "",
    paramName: "time"
}, {
    label: "已完成部分",
    type: 'input',
    value: "",
    paramName: "width"
}]


function CreateTask(props) {
    const [useForm, setForm] = useState([...defaultForm])
    const history = useHistory();

    function addItem(params: FormItemProps) {
        if (useForm.length === 0) {
            useForm.push(params, ...configForm)
        } else {
            useForm.splice(useForm.length - configForm.length - 1, 0, params)
        }
        setForm([...useForm]);
    }

    function onSubmit(params: Object) {
        props.dispatch({ type: 'home/addPurposeItem', data: params })
        Toast.success('保存成功！');
        setForm([...defaultForm])
        history.goBack();
    }

    return <div className={styles.body}>
        <Form itemArr={useForm} submit={onSubmit}>
            <div>
                <Create addItem={addItem} />
            </div>
        </Form>
    </div>
}


export default connectHook(state => {
    return {}
})(CreateTask)