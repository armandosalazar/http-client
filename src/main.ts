import { createApp } from "vue";
import naive from "naive-ui";
import Layout from "./views/Layout.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "/", component: () => import("./views/home/home.vue") },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(Layout);
app.use(naive);
app.use(router);
app.mount("#app");
