<template>
  <div class="absolute top-0 left-0 right-0 bottom-0 flex flex-col sm:flex-row">
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
