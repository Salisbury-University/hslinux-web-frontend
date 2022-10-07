import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeLayout from "../layouts/HomeLayout.vue";
import PageContents from "../views/PageContents.vue";
import Login from "../views/Login.vue";
import testingDynamic from "../views/testingDynamic.vue";

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
        path: "Login",
        component: Login,
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
