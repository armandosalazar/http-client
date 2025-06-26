import { createApp } from "vue";
import naive from "naive-ui";
import layout from "@/views/layout.vue";
import { createRouter, createWebHistory } from "vue-router";
import "@/index.css"

const routes = [
  {
    path: "/",
    component: layout,
    children: [
      { path: "/", component: () => import("@/views/home/home.vue") },
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(layout);
app.use(naive);
app.use(router);
app.mount("#app");
