<template>
  <div
    class="flex-1 flex flex-col justify-around p-6"
    @click="showAllowance"
  >
    <div class="flex flex-col gap-4">
      <div class="grid justify-center">
        <div
          class="w-40 h-40 sm:w-96 sm:h-96 bg-white/10 rounded-full border-4 border-white/87"
        >
          <img
            :src="person.image"
            class="w-full h-full rounded-full"
          />
        </div>
      </div>
      <h2>{{ person.name }}</h2>
      <h3>{{ left }} kr.</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["person"]);

// Get the date the person started collecting allowance
const startDate = props.person.startDate;

// Get the current date
const date = new Date();

// Get the difference in milliseconds between the two dates
const difference = date.getTime() - startDate.getTime();

// Convert the difference to days
const days = difference / (1000 * 3600 * 24);

// Get the number of weeks since the person started collecting allowance, including the current week
const weeks = Math.floor(days / 7) + 1;

// Get the amount the person has collected since they started
const total = weeks * props.person.allowance;

// Get the amount the person has spent
const spent = props.person.spent;

// Get the amount the person has left
const left = total - spent;

const showAllowance = () => {
  console.log(props);
};
</script>
