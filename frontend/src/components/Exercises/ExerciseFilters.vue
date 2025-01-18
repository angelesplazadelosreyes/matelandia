<template>
    <div class="filters">
      <label for="topic" class="filter-label">Tipo:</label>
      <select id="topic" v-model="selectedTopic" @change="emitFilters" class="filter-select">
        <option value="">Todos</option>
        <option v-for="topic in topics" :key="topic" :value="topic">{{ topic }}</option>
      </select>
  
      <label for="difficulty" class="filter-label">Dificultad:</label>
      <select id="difficulty" v-model="selectedDifficulty" @change="emitFilters" class="filter-select">
        <option value="">Todos</option>
        <option v-for="level in difficulties" :key="level" :value="level">{{ level }}</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      topics: {
        type: Array,
        default: () => ['Preparación', 'Aritmética', 'Álgebra'],
      },
      difficulties: {
        type: Array,
        default: () => ['Fácil', 'Medio', 'Difícil'],
      },
    },
    data() {
      return {
        selectedTopic: '',
        selectedDifficulty: '',
      };
    },
    methods: {
      emitFilters() {
        this.$emit('filter-change', {
          topic: this.selectedTopic,
          difficulty: this.selectedDifficulty,
        });
      },
    },
  };
  </script>
  
  <style>
  .filters {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-bottom: 16px;
  }

  .filter-label {
    font-size: 1.5rem; 
    font-weight: bold; 
    color: #37FB28; 
    margin-right: 8px; 
  }

  .filter-select {
  font-size: 1.2rem; 
  padding: 8px; /* Espaciado interno para los bordes */
  border: 2px solid #28a745; 
  border-radius: 8px; 
  background-color: #2c3e50; 
  color: #ffffff; 
  outline: none; 
}

.filter-select:focus {
  border-color: #ffc107; /* Amarillo cuando está seleccionado */
  box-shadow: 0 0 5px #ffc107; /* Resplandor amarillo */
}


  </style>
  