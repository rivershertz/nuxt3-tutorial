<template>
  <div class="grid h-full grid-cols-2 gap-10 bg-white p-20">
    <img
      :src="data.image"
      :alt="data.title"
      class="h-[60vh] place-self-center"
    />
    <div class="">
      <h2 class="text-4xl">{{ data.title }}</h2>
      <div class="flex">
        <img
          v-for="star in Math.round(data.rating.rate)"
          src="/star.svg"
          alt="rating star"
          class="w-5"
        />
        <p class="opacity-50">({{ data.rating.count }})</p>
      </div>
      <p class="mt-10 text-xl">Price: {{ data.price }}$</p>
      <h3 class="mt-10 border-b-2 pb-3 text-lg opacity-60">Description</h3>
      <p class="mt-3 max-w-[70%]">{{ data.description }}</p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: Object,
      title: String,
      price: String,
      description: String,
      image: String,
      rating: {
        rate: Number,
        count: Number,
      },
    },
  });
</script>

<style scoped></style>
