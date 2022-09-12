import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import * as dotenv from "dotenv";
import HomeLayout from "../layouts/HomeLayout.vue";
import PageContents from "../views/PageContents.vue";
import Login from "../components/Login.vue";

dotenv.config();

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeLayout,
    children: [
      {
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
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
