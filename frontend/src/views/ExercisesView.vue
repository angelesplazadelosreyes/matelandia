<template>
  <div>
    <!-- Filtros para tipo y dificultad -->
    <exercise-filters
      :topics="topics"
      :difficulties="difficulties"
      @filter-change="applyFilters"
    />

    <!-- Contenedor de los cuadros -->
    <div class="exercise-container">
      <!-- Cuadro izquierdo -->
      <div class="exercise-left">
        <p v-if="!selectedExercise">Selecciona lo que quieras ejercitar en el listado de la derecha</p>
        <p v-else>{{ selectedExercise }}</p>
      </div>

      <!-- Cuadro derecho -->
      <div class="exercise-right">
        <ul>
          <li
            v-for="exercise in filteredExercises"
            :key="exercise.id"
            @click="selectExercise(exercise.title)"
          >
            {{ exercise.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ExerciseFilters from '../components/Exercises/ExerciseFilters.vue';

export default {
  components: {
    ExerciseFilters,
  },
  data() {
    return {
      exercises: [
        { id: 1, title: "Suma", type: "Aritmética", difficulty: "Fácil" },
        { id: 2, title: "Resta", type: "Aritmética", difficulty: "Fácil" },
        { id: 3, title: "Multiplicación", type: "Aritmética", difficulty: "Medio" },
        { id: 4, title: "División", type: "Aritmética", difficulty: "Medio" },
      ],
      filteredExercises: [],
      topics: ["Preparación", "Aritmética", "Álgebra"],
      difficulties: ["Fácil", "Medio", "Difícil"],
      selectedExercise: null,
    };
  },
  methods: {
    // Filtrar ejercicios según los valores seleccionados
    applyFilters(filters) {
      this.filteredExercises = this.exercises.filter((exercise) => {
        return (
          (!filters.topic || exercise.type === filters.topic) &&
          (!filters.difficulty || exercise.difficulty === filters.difficulty)
        );
      });
    },
    // Manejar la selección de un ejercicio
    selectExercise(title) {
      this.selectedExercise = title;
    },
  },
  mounted() {
    // Mostrar todos los ejercicios al cargar la página
    this.filteredExercises = this.exercises;
  },
};
</script>

<style scoped>
/* Contenedor principal */
.exercise-container {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 20px;
}

/* Estilos para el cuadro izquierdo */
.exercise-left {
  flex: 1;
  border: 2px solid #28a745;
  border-radius: 8px;
  padding: 16px;
  color: white;
  font-size: 1.2rem; 
  background-color: #2c3e50;
}

/* Estilos para el cuadro derecho */
.exercise-right {
  flex: 1;
  border: 2px solid #28a745;
  border-radius: 8px;
  padding: 16px;
  color: #28a745;
  font-size: 1.2rem; 
}

/* Estilos para la lista en el cuadro derecho */
.exercise-right ul {
  list-style: none;
  padding: 0;
}

.exercise-right li {
  cursor: pointer;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 4px;
}

.exercise-right li:hover {
  background-color: #28a745;
  color: black;
}
</style>
