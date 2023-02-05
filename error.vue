<template>
  <div class="grid h-screen place-items-center text-center">
    <div class="flex flex-col gap-5">
      <h2 class="text-[150px] leading-[130px]">{{ error.statusCode }}</h2>
      <p class="text-6xl">😬😬😬😬</p>
      <p class="text-4xl">Ooooops....</p>
      <p class="text-4xl">{{ error.message }}</p>
      <button
        class="rounded bg-green-500 px-12 py-2 text-xl"
        @click="handleClearError"
      >
        Back to Home
      </button>
    </div>
  </div>
</template>

<script setup>
  defineProps(["error"]);

  const handleClearError = () => clearError({redirect: "/"});
</script>

<style scoped></style>
