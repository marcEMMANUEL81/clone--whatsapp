import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/chat",
        name: "chat",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Chats.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;