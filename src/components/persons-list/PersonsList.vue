<template>
  <div class="w-full flex flex-col sm:flex-row gap-20 justify-evenly">
    <person
      v-for="person in persons"
      :key="person.name"
      :person="person"
    />
  </div>
</template>

<script setup lang="ts">
import Person from "./components/Person.vue";

defineProps(["persons"]);
</script>
