import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeLayout from "../layouts/HomeLayout.vue";
import HomePage from "../views/HomePage.vue";
import Login from "../views/Login.vue";
import Preferences from "../views/Preferences.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeLayout,
    children: [
      {
        path: "",
        component: HomePage,
      },
      {
        path: "Login",
        component: Login,
      },
      {
        path: "Preferences",
        component: Preferences,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
