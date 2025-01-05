import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; 

// Crea y configura la instancia de la aplicación con el router
createApp(App).use(router).mount("#app");
