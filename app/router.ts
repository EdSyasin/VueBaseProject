import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)

const routes = [
    {
        name: "Main",
        path: "/",
        component: () => import(/* webpackChunkName: "MainPage" */ "./views/Main.vue")
    },
    {
        name: "About",
        path: "/about",
        component: () => import(/* webpackChunkName: "AboutPage" */ "./views/About.vue")
    },

]

const router = new VueRouter({
    mode: "history",
    //base: process.env.BASE_URL,
    routes
})

export default router;