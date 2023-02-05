<template>
  <div
    class="flex h-full w-full flex-col items-center justify-between gap-3 place-self-center rounded-xl bg-white p-3 text-center shadow-lg"
  >
    <img
      :src="data.image"
      alt="product thumbnail"
      class="max-w-[130px]"
    />
    <div class="flex flex-col items-center justify-between gap-3">
      <h3 class="font-bold">{{ data.title }}</h3>
      <p>{{ data.price }}$</p>
      <NuxtLink
        :to="`/products/${data.id}`"
        class="h-fit w-fit rounded bg-green-300 px-7 py-1 font-bold duration-200 hover:scale-110"
        >More info</NuxtLink
      >
    </div>
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
