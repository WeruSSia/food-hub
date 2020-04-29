import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isUserLoggedIn: false,
		searchData: {},
	},
	mutations: {
		setUserLoggedIn(state, payload) {
			state.isUserLoggedIn = payload;
		},
		setSearchData(state, payload) {
			state.searchData = payload;
		},
	},
	actions: {},
	modules: {},
});
