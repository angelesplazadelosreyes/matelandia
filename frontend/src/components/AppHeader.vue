<template>
  <header class="navbar navbar-expand-lg navbar-dark bg-dark">
    <nav class="container">
      <!-- Logo -->
      <router-link to="/" class="navbar-brand">
        <img alt="Vue logo" src="../assets/logo.png" class="logo" />
      </router-link>
      
      <!-- Botón del menú hamburguesa -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links de navegación -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">HOME</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/exercises" class="nav-link">EXERCISES</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/games" class="nav-link">GAMES</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/classes" class="nav-link">CLASSES</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">CONTACT</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style scoped>
/* Ajuste para el logo */
.logo {
  height: 50px; /* Ajusta la altura del logo */
  width: auto; /* Mantén las proporciones del logo */
  object-fit: contain;
}
</style>
