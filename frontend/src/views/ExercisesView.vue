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
        <p v-if="!selectedExercise">Cargando ejercicio...</p>
        <div v-else>
          <p>
            ¿Cuánto es {{ selectedExercise.factor1 }} x
            {{ selectedExercise.factor2 }}?
          </p>
          <div>
            <button
              v-for="(option, index) in selectedExercise.options"
              :key="index"
              @click="submitAnswer(option)"
            >
              {{ option }}
            </button>
          </div>
        </div>
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
import axios from "@/axios";
import ExerciseFilters from "../components/Exercises/ExerciseFilters.vue";

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
    // Obtener datos del backend
    async fetchExercise() {
      try {
        const response = await axios.get("exercises/times-table/");
        this.selectedExercise = response.data; // Guardar el ejercicio recibido
      } catch (error) {
        console.error("Error al obtener el ejercicio:", error);
      }
    },
    // Manejar la selección de un ejercicio
    selectExercise(title) {
      this.selectedExercise = title;
    },
    submitAnswer(option) {
      if (option === this.selectedExercise.options[0]) {
        alert("¡Respuesta correcta!");
      } else {
        alert("Respuesta incorrecta.");
      }
      this.fetchExercise(); // Cargar un nuevo ejercicio
    },
    applyFilters(filters) {
      this.filteredExercises = this.exercises.filter((exercise) => {
        return (
          (!filters.topic || exercise.type === filters.topic) &&
          (!filters.difficulty || exercise.difficulty === filters.difficulty)
        );
      });
    },
  },
  mounted() {
    this.fetchExercise(); // Cargar el primer ejercicio al montar el componente
  },
};
</script>

<style scoped>
/* Mantén los estilos existentes */
</style>
