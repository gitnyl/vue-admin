import { createStore } from 'vuex';

export default createStore({
    state: {
        pageTitle: 'title', // 초기값 설정
    },
    mutations: {
        setPageTitle(state, title) {
            state.pageTitle = title;
        },
    },
    actions: {
        updatePageTitle({ commit }, title) {
            commit('setPageTitle', title);
        },
    },
    getters: {
        getPageTitle: (state) => state.pageTitle,
    },
});
