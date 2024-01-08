import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";
import "./style.css";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(ElementPlus);
app.use(pinia);
app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
