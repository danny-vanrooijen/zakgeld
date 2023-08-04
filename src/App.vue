<script setup lang="ts">
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();

const today = `${year}-${month}-${day}`;
</script>

<template>
  <div class="text-center">
    <div class="absolute top-10 left-0 right-0">
      <h1>Today is {{ today }}</h1>
    </div>
    <div class="absolute top-0 left-0 right-0 bottom-0 grid place-items-center">
      <div class="flex flex-col gap-y-20">
        <div class="flex flex-col gap-y-5">
          <h2>Jamie</h2>
          <div class="text-2xl">45,00 kr.</div>
        </div>
        <div class="flex flex-col gap-y-5">
          <h2>Kira</h2>
          <div class="text-2xl">95,00 kr.</div>
        </div>
      </div>
    </div>
  </div>
</template>
