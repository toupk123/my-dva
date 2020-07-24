
export default {
    namespace: 'home',
    state: {
        initialPage:1
    },
    reducers: {
        add(state, action) {
            return { ...state, str: 'ceshi12' }
        },
        add2(state, action) {
            return { ...state, str: 'ceshi12' }
        }
    }
}