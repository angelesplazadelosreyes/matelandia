<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>{{ message }}</h1> <!-- Mostrará el mensaje del backend -->
    <p>Este es un texto estático de prueba 14</p>
  </div>
</template>

<script>
import axios from "./axios"; // Importamos la configuración de Axios

export default {
  name: "App",
  data() {
    return {
      message: "Cargando...", // Mensaje inicial mientras esperamos la respuesta del backend
    };
  },
  mounted() {
    // Al montar el componente, hacemos la llamada al backend
    axios
      .get("test/") // Hacemos una petición GET al endpoint '/api/test/'
      .then((response) => {
        this.message = response.data.message; // Guardamos el mensaje en "message"
      })
      .catch((error) => {
        console.error("Error al conectar con el backend:", error);
        this.message = "Error al cargar con el backend"; // Mensaje de error
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
