<template>
  <div class="text-center">
    <div class="absolute top-10 left-0 right-0">
      <h1>{{ today }}</h1>
    </div>
    <div class="absolute top-0 left-0 right-0 bottom-0 grid place-items-center">
      <persons-list :persons="persons" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PersonsList from "./components/persons-list/PersonsList.vue";

const startDate = new Date("2023-08-05 00:00:00");
const date = new Date();

const today = date.toLocaleDateString("en", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const persons = [
  {
    name: "Jamie",
    startDate: startDate,
    amount: 45,
    allowance: 40,
    frequency: "weekly",
    spent: 0,
  },
  {
    name: "Kira",
    startDate: startDate,
    amount: 95,
    allowance: 40,
    frequency: "weekly",
    spent: -45,
  },
];
</script>
