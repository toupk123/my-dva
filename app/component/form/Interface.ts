export type FormItemProps =  InputProps | SelectProps;
export type INPUTTYPE = 'input';
export type SELECTTYPE = 'select';
export type ITEMVALUE = string | number | boolean;

export interface FormProps {
    itemArr: Array<FormItemProps>,
    submitText?: string
}


interface ItemProps {
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
        key: string,
        value: ITEMVALUE
    }>
}