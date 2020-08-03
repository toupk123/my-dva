import  { ReactElement } from "react"

export type FormItemProps =  InputProps | SelectProps;
export type INPUTTYPE = 'input';
export type SELECTTYPE = 'select';
export type ITEMVALUE = string | number ;

export interface FormProps {
    itemArr: Array<FormItemProps>,
    submitText?: string,
    children?: ReactElement,
    submit?: Function
}


export interface ItemProps {
    label:string,
    paramName: string,
    defaultValue? : ITEMVALUE,
    onChange?:Function,
    value?:ITEMVALUE
}


export interface InputProps  extends ItemProps{
    type: INPUTTYPE
}


export interface SelectProps extends ItemProps{
    type:SELECTTYPE,
    options: Array<{
        label: string,
        value: ITEMVALUE
    }>
}