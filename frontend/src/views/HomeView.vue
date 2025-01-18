<template>
    <div>
      <h1 class="text-primary">{{ message }}</h1>
      <p class="text-muted">Este es un texto estático de prueba 14</p>
      <b-button variant="success" @click="showAlert">Haz clic aquí</b-button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: 'Hello, World!'
      };
    },
    methods: {
      showAlert() {
        alert('Button clicked!');
      }
    }
  };
  </script>
  