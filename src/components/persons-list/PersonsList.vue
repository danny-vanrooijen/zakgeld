<template>
  <person
    v-for="person in persons"
    :key="person.name"
    :person="person"
  />
</template>

<script setup lang="ts">
import Person from "./components/Person.vue";

defineProps(["persons"]);
</script>
