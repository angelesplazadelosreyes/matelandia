<template>
  <div id="app">
    <AppHeader />
    <main>
      <h1>{{ message }}</h1>
      <p>Este es un texto estático de prueba 14</p>
      <router-view />
    </main>
    <footer>
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
  background-color: black; /* Fondo negro para toda la página */
  color: white; /* Asegura que el texto sea visible */
  height: 100%; /* Asegura que html y body ocupen toda la altura */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  min-height: 100vh; /* Asegura que el #app ocupe al menos toda la altura de la ventana */
  display: flex;
  flex-direction: column; /* Organiza los elementos en columna */
}

main {
  flex: 1; /* Hace que el contenido principal tome el espacio disponible */
  padding: 100px;
}

footer {
  background-color: #2c3e50; /* Fondo oscuro para diferenciar */
  color: white;
  text-align: center;
  padding: 10px;
}
</style>
