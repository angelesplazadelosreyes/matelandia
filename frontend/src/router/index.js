import { createRouter, createWebHistory } from "vue-router";

// Importa las vistas
import HomeView from "../views/HomeView.vue";
import ExercisesView from "../views/ExercisesView.vue";
import GamesView from "../views/GamesView.vue";
import ClassesView from "../views/ClassesView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/exercises", name: "Exercises", component: ExercisesView },
  { path: "/games", name: "Games", component: GamesView },
  { path: "/classes", name: "Classes", component: ClassesView },
  { path: "/contact", name: "Contact", component: ContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
