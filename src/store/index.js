import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isUserLoggedIn: false,
		searchResult: [],
		searchData: {},
	},
	mutations: {
		setUserLoggedIn(state, payload) {
			state.isUserLoggedIn = payload;
		},
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
