<template>
  <div class="container">
    <div>
      <div class="absolute top-5 left-5 text-xl font-bold">
        &ShortLeftArrow;
      </div>
      <h1>Jamie</h1>
      <div>40 kr.</div>
    </div>
    <div class="py-10 flex gap-5 justify-center">
      <input
        type="number"
        class="w-20 border border-white px-4 py-2 text-xl"
      />
      <button
        class="p-4 bg-black border border-white rounded-lg text-3xl text-yellow-500"
      >
        &#129689;
      </button>
    </div>
    <div class="flex flex-col gap-5 py-10">
      <div class="text-center">
        <h3>Purchase history</h3>
      </div>
      <ul>
        <template v-for="index in 10">
          <li class="flex justify-between">
            <span>21 januari 2023</span>
            <span>25 kr.</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
