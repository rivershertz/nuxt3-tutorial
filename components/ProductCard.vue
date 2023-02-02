<template>
  <div class="w-[200px] place-self-center">
    <h3>{{ data.title }}</h3>
    <p>{{ data.price }}</p>
    <NuxtLink
      :to="`/products/${data.id}`"
      class="bg-green-300"
      >More info</NuxtLink
    >
  </div>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: Object,
      id: Number,
      title: String,
      price: String,
    },
  });
</script>

<style scoped></style>
