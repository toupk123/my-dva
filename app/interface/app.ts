import { PurposeListProps } from "../routes/home/purposeList"

export interface appModel {
    home: HomeState
}


export interface HomeState {
    purposeListParams: PurposeListProps
}