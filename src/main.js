import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

import components from "./ui-components";
components.map((component) => app.component(component.name, component));

app.use(router);

app.mount("#app");
