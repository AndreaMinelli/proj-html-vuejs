import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/merriweather";
import "@fontsource/merriweather-sans";
import { fontAwesome } from "./data/fontawesome.js";
import App from "./App.vue";

const app = createApp(App);

app.component("font-awesome-icon", fontAwesome.FontAwesomeIcon);
app.mount("#app");
