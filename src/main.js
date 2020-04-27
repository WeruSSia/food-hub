import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

Vue.use(Loading);

Vue.config.productionTip = false;

var firebaseConfig = {
	apiKey: "AIzaSyAbynD2aV-eAsxpNHW5lg9cEJPokbLDxKo",
	authDomain: "food-hub-42121.firebaseapp.com",
	databaseURL: "https://food-hub-42121.firebaseio.com",
	projectId: "food-hub-42121",
	storageBucket: "food-hub-42121.appspot.com",
	messagingSenderId: "966735208289",
	appId: "1:966735208289:web:2b5e36db136dbd0b806f20",
	measurementId: "G-LVNZKDKRCB",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
firebase.auth().onAuthStateChanged(user => {
	if (user) {
		store.commit("setUserLoggedIn", true);
	} else {
		store.commit("setUserLoggedIn", false);
	}
});

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app");
