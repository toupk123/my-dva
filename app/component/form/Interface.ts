export type FormItemProps =  InputProps | SelectProps;
export type INPUTTYPE = 'input';
export type SELECTTYPE = 'select';


export interface FormProps {
    itemArr: Array<FormItemProps>,
    submitText?: string
}


interface ItemProps {
    label:string,
    paramName: string,
    defaultValue? : any
}


export interface InputProps  extends ItemProps{
    type: INPUTTYPE
}


export interface SelectProps extends ItemProps{
    type:SELECTTYPE,
    options: Array<{
        key: string,
        value: string | number | boolean
    }>
}