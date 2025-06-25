import { createApp } from "vue";
import naive from "naive-ui";
import Layout from "./views/Layout.vue";

const router = [
  {
    path: "/",
    component: Layout,
  }
];

const app = createApp(Layout);
app.use(naive);
app.mount("#app");
