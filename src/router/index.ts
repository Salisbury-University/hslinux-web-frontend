import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeLayout from "../layouts/HomeLayout.vue";
import PageContents from "../components/PageContents.vue";
import Testing from "../components/Testing.vue";
import Login from "../components/Login.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeLayout,
    children: [
      {
        //landing page
        path: "",
        component: PageContents,
      },
      {
        path: "PageContents",
        component: PageContents,
      },
      {
        path: "Login",
        component: Login,
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
