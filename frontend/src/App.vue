<template>
  <div id="app">
    <AppHeader />
    <main class="container text-center my-5">
      <router-view />
    </main>
    <footer class="footer bg-dark text-white text-center py-3">
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
  height: 100%;
  background-color: black !important;
  color: white;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el contenedor principal tenga la altura completa de la ventana */
}

main {
  flex: 1; /* Permite que el contenido principal ocupe el espacio restante */
}

.footer {
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 10px;
}
</style>
