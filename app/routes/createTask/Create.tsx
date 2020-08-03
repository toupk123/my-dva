import React, { useState } from "react";
import { Button } from "antd-mobile"
import Form from "../../component/form"
import { FormItemProps, INPUTTYPE, SELECTTYPE } from "../../component/form/Interface"

interface AddParams {
    type: Array<INPUTTYPE | SELECTTYPE>,
    label: string
}

interface CreateProps {
    addItem: Function
}

const seasons = [
    {
        label: 'input填写',
        value: 'input',
        key: 'input填写'
    },
    {
        label: 'select选择',
        value: 'select',
        key: 'select选择'
    },
];

const CONFIG: FormItemProps[] = [{
    label: "标题",
    paramName: 'label',
    type: 'input',
    value: ''
}, {
    label: "表单输入项类型",
    paramName: 'type',
    type: 'select',
    value: '',
    options: seasons
}]

function Create(props: CreateProps) {
    const [useShow, changeShow] = useState(false);
    const [useConfig, setConfig] = useState([...CONFIG])
    function show() {
        changeShow(true)
    }

    function add(params: AddParams) {
        props.addItem({
            label: params.label,
            type: params.type[0],
            value: '',
        })
        changeShow(false)
    }

    return <div style={{ height: '100%' }}>
        <Button onClick={show}>新增</Button>
        {useShow && <Form itemArr={useConfig} submit={add}></Form>}
    </div>
}


export default Create