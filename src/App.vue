<template>
  <div class="text-center">
    <person-details
      v-if="showDetails"
      :activePerson="persons[0]"
    />
    <persons-list
      v-else
      :persons="persons"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PersonDetails from "./components/person-details/PersonDetails.vue";
import PersonsList from "./components/persons-list/PersonsList.vue";

const startDate = new Date("2023-08-05 00:00:00");

const showDetails = ref(true);

const persons = [
  {
    name: "Jamie",
    startDate: startDate,
    amount: 45,
    allowance: 40,
    frequency: "weekly",
    spent: 40,
    image: "../jamie.jpg",
    details: false,
  },
  {
    name: "Kira",
    startDate: startDate,
    amount: 95,
    allowance: 40,
    frequency: "weekly",
    spent: 0,
    image: "./kira.jpg",
    details: false,
  },
];
</script>
