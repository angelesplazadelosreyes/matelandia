<template>
  <div>
    <h1>Welcome to Vue!</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from "../axios";

export default {
  data() {
    return {
      message: "Loading...",
    };
  },
  mounted() {
    axios
      .get("test/") // Cambia "test/" por el endpoint que configuraste en Django
      .then((response) => {
        this.message = response.data.message;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.message = "Failed to load data.";
      });
  },
};
</script>
