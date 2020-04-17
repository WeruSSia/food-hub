import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        searchResult: {},
        searchData: {},
    },
    mutations: {
        setSearchResult(state, payload) {
            state.searchResult = payload;
        },
        setSearchData(state, payload) {
            state.searchData = payload;
        },
    },
    actions: {},
    modules: {},
});
