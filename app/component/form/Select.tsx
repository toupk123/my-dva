import React, { useState } from "react";
import { List, PickerView, Modal } from 'antd-mobile'
import { SelectProps } from "./Interface"

const Item = List.Item

function Select(props: SelectProps) {
    const [useValue, setValue] = useState([props.defaultValue || '']);
    const [useVisible, setVisible] = useState(false)
    function onChange(v) {
        setValue(v)
        props.onChange && props.onChange(v, props)
        // setVisible(false)
    }
    function onClose() {
        setVisible(false)
    }
    function showModal() {
        setVisible(true)
    }

    function showValueText(){
        let text  = [];
        useValue.map(item=>{
            props.options.map(option=>{
                if(item === option.value){
                    text.push(option.label)
                }
            })
        })
        return text.join('');
    }

    return <List className="my-list">
        <Item extra={showValueText() || '请输入选项'} onClick={showModal}>
            <div>{props.label}</div>
        </Item>
        <Modal
            popup
            visible={useVisible}
            onClose={onClose}
            animationType="slide-up"
        >
            <PickerView
                onChange={onChange}
                value={useValue}
                data={props.options}
                cascade={false}
            />
        </Modal>
    </List>



}

/*    <List >
        <div className="am-list-item am-input-item am-list-item-middle">{props.label}</div>
        <div >
            <div>123123</div>
            <Modal
                popup
                visible={useVisible}
                onClose={onClose}
                animationType="slide-up"
            >
                <PickerView
                    onChange={onChange}
                    value={useValue}
                    data={props.options}
                    cascade={false}
                />
            </Modal>

        </div>
    </List> */
export default Select