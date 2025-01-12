<template>
  <div id="app">
    <AppHeader />
    <main class="container text-center my-5">
      <h1 class="text-primary">{{ message }}</h1>
      <p class="text-muted">Este es un texto estático de prueba 14</p>
      <b-button variant="success" @click="showAlert">Haz clic aquí</b-button>
      <router-view />
    </main>
    <footer class="bg-dark text-white text-center py-3">
      <p>© 2025 Matelandia</p>
    </footer>
  </div>
</template>

<script>
import axios from "./axios";
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
  data() {
    return {
      message: "Cargando...",
    };
  },
  methods: {
    showAlert() {
      alert("¡BootstrapVue-Next está funcionando!");
    },
  },
  mounted() {
    axios
      .get("test/")
      .then((response) => {
        this.message = response.data.message;
      })
      .catch((error) => {
        console.error("Error al conectar con el backend:", error);
        this.message = "Error al cargar con el backend";
      });
  },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: black !important;
  color: white;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>
