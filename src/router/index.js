import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../views/HomePage.vue";
import SearchResults from "../views/SearchResults.vue";
import Favourites from "../views/Favourites.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/results",
        name: "SearchResults",
        component: SearchResults,
    },
    {
        path: "/favourites",
        name: "Favourites",
        component: Favourites,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
