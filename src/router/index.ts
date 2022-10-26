import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeLayout from "../layouts/HomeLayout.vue";
import HomePage from "../views/HomePage.vue";
import Login from "../views/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeLayout,
    children: [
      {
        //landing page
        path: "",
        component: HomePage,
      },
      {
        path: "Login",
        component: Login,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
