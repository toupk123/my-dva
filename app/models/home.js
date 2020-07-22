
export default {
    namespace: 'home',
    state: {
        str: '测试12'
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