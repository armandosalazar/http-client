import { createApp } from "vue";
// import App from "./App.vue";
import Layout from "./views/layout.vue";
const router = [
  {
    path: "/",
    component: Layout,
  }
];

createApp(Layout).use(router).mount("#app");
