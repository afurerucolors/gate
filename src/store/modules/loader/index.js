export default {
    namespaced: true,
    state: {
        show: false,
    },
    mutations: {
        set(state, status) {
            return state.show = status;
        },

    }
}