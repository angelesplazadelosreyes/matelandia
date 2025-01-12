import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createBootstrap } from "bootstrap-vue-next"; 
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "bootstrap/dist/js/bootstrap.bundle";

// Crear la instancia de la aplicación
const app = createApp(App);

// Integrar BootstrapVueNext
const bootstrap = createBootstrap();
app.use(bootstrap);

// Integrar el router
app.use(router);

// Montar la aplicación
app.mount("#app");
