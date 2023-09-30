<template>
  <div class="text-center">
    <person-details
      v-if="showDetails"
      :activePerson="activePerson"
    />
    <persons-list
      v-else
      :persons="persons"
    />
  </div>
</template>

<script setup lang="ts">
// Import libraries
import { computed } from "vue";
import { useGlobalStore } from "@/stores/GlobalStore.js";

// Import vue components
import PersonDetails from "./components/person-details/PersonDetails.vue";
import PersonsList from "./components/persons-list/PersonsList.vue";

// Import types

// Import utils, stores and models
const globalStore = useGlobalStore();

const showDetails = computed(() => globalStore.showDetails);
const activePerson = computed(() => globalStore.activePerson);

const startDate = new Date("2023-08-05 00:00:00");

const persons = [
  {
    name: "Jamie",
    startDate: startDate,
    allowance: 40,
    frequency: "weekly",
    spent: 40,
    image: "../jamie.jpg",
  },
  {
    name: "Kira",
    startDate: startDate,
    allowance: 40,
    frequency: "weekly",
    spent: 0,
    image: "../kira.jpg",
  },
];
</script>
