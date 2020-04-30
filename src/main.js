import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import { initializeFirebase } from "./services/FirebaseServices.js";

Vue.config.productionTip = false;
Vue.use(Loading);
initializeFirebase();

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount("#app");
