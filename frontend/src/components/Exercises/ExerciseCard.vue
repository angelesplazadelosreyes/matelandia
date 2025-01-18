<template>
    <div class="card exercise-card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">Difficulty: {{ difficulty }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ExerciseCard",
    props: {
      title: {
        type: String,
        required: true,
      },
      difficulty: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .exercise-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    background-color: #2c3e50; /* Fondo oscuro */
    color: white; /* Texto blanco */
    transition: transform 0.2s;
  }
  
  .exercise-card:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }
  </style>
  