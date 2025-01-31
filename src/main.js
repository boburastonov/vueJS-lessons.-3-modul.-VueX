import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

import components from "./components";

console.log("test", import.meta.env.BASE_URL);

const app = createApp(App);

components.map((component) => app.component(component.name, component));

app.use(router);

app.mount("#app");
