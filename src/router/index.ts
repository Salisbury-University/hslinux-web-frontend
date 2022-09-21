import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeLayout from "../layouts/HomeLayout.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Preferences from "../views/Preferences.vue";
import testingDynamic from "../views/testingDynamic.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeLayout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "Home",
        component: Home,
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

  { path: "/testingDynamic/:id", component: testingDynamic },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
