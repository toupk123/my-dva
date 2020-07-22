export default {
    namespace: 'add',
    state: {
        strs: '测试12'
    },
    reducers: {
        add(state, action) {
            return { ...state, str1: 'ceshi12' }
        },
        add2(state, action) {
            return { ...state, str1: 'ceshi12' }
        }
    }
}