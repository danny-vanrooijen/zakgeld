<template>
  <div class="text-center">
    <persons-list :persons="persons" />
  </div>
</template>

<script setup lang="ts">
// Import libraries

// Import vue components
import PersonsList from "./components/persons-list/PersonsList.vue";

// Import types

// Import utils, stores and models
const startDate = new Date("2023-08-05 00:00:00");

const persons = [
  {
    name: "Jamie",
    startDate: startDate,
    allowance: 40,
    frequency: "weekly",
    spent: 359,
    image: "./jamie.jpg",
  },
  {
    name: "Kira",
    startDate: startDate,
    allowance: 40,
    frequency: "weekly",
    spent: 359,
    image: "./kira.jpg",
  },
];
</script>
