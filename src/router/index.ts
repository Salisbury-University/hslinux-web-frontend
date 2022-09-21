import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeLayout from "../layouts/HomeLayout.vue";
import PageContents from "../views/PageContents.vue";
import Login from "../views/Login.vue";
import markDown from "../views/markDown.vue";

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
        path: "Login",
        component: Login,
      },
    ],
  },
  { path: "..views/markDown/:id", component: markDown },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
