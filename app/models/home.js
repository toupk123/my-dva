import { Storage } from "../uilts"

export default {
    namespace: 'home',
    state: {
        purposeListParams: {
            list: []
        },
    },
    reducers: {
        addPurposeItem(state, data) {
            const storage = Storage("localStorage");
            state.purposeListParams.list.push(data.data);
            storage.setItem(`TOTAL_TASK`, JSON.stringify(data.data))
        }
    }
}