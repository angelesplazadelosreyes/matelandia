<template>
    <div class="exercise-list">
      <exercise-card
        v-for="exercise in exercises"
        :key="exercise.id"
        :title="exercise.title"
        :difficulty="exercise.difficulty"
      />
    </div>
  </template>
  
  <script>
  import ExerciseCard from './ExerciseCard.vue';
  
  export default {
    components: {
      ExerciseCard,
    },
    data() {
      return {
        exercises: [
          { id: 1, title: 'Preparación', difficulty: 'Fácil'},
          { id: 2, title: 'Aritmética', difficulty: 'Medio'  },
          { id: 3, title: 'Álgebra', difficulty: 'Difícil' },
        ],
      };
    },
  };
  </script>
  
  <style>
  .exercise-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
  }
  </style>
  