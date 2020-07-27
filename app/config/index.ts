import { INPUTTYPE } from "../component/form/config"
import { FormItemProps } from "../component/form/Interface"

export const homeTabs = [{
    title: "首页",
    sub: 1
}, {
    title: "统计",
    sub: 2
}, {
    title: "我的",
    sub: 3
}];

export const formItemArr: Array<FormItemProps> = [{
    type: INPUTTYPE,
    label: 'ceshi',
    paramName:'test'
}]