import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import Favourites from "../views/Favourites.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/favourites",
        name: "Home",
        component: Favourites,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
