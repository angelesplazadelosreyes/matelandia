<template>
  <header>
    <nav>
      <img alt="Vue logo" src="../assets/logo.png" />
      <!-- Botón del menú hamburguesa -->
      <button class="menu-toggle" @click="toggleMenu">
        ☰
      </button>
      <!-- Lista de navegación -->
      <ul :class="{ open: isMenuOpen }">
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/exercises">EXERCISES</router-link></li>
        <li><router-link to="/games">GAMES</router-link></li>
        <li><router-link to="/classes">CLASSES</router-link></li>
        <li><router-link to="/contact">CONTACT</router-link></li>
      </ul>

    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMenuOpen: false, // Estado del menú (abierto/cerrado)
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Cambia el estado del menú
    },
  },
};
</script>

<style scoped>
/* Estilo base del header */
header {
  background-color: #2c3e50;
  color: white;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

/* Botón del menú hamburguesa */
.menu-toggle {
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  display: none; /* Oculto por defecto */
}

/* Lista de navegación */
header nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

header nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

header img {
  height: 50px; /* Ajusta la altura del logo */
  width: auto; /* Mantén las proporciones del logo */
  object-fit: contain; /* Asegura que el logo no se deforme */
}

/* Estilos responsivos */
@media (max-width: 768px) {
  /* Muestra el botón del menú hamburguesa */
  .menu-toggle {
    display: block;
  }

  /* Por defecto, esconde la lista de navegación */
  header nav ul {
    display: none;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    background-color: #34495e;
    position: absolute;
    top: 50px;
    left: 0;
    padding: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  /* Muestra la lista de navegación cuando el menú está abierto */
  header nav ul.open {
    display: flex;
  }

  header nav ul li a {
    display: block;
    padding: 10px;
    width: 100%;
    background-color: #34495e;
    border-radius: 5px;
  }

  header nav ul li a:hover {
    background-color: #1abc9c;
  }
}
</style>
