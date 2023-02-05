<template>
  <div class="h-screen grid-rows-[auto_1fr_auto]">
    <div class="">
      <NuxtLink
        to="/products"
        class="inline-block p-3 text-2xl"
      >
        Merch</NuxtLink
      >
    </div>
    <slot />
    <div>
      <nav class="border-t border-green-500 py-5 px-5">
        <ul class="flex gap-16 text-lg">
          <li v-for="route in routes">
            <NuxtLink
              :to="route.path"
              class="relative after:absolute after:top-[120%] after:left-0 after:h-1 after:w-0 after:bg-green-500 after:opacity-0 after:duration-300 after:content-[''] hover:after:w-full hover:after:opacity-100"
              >{{ route.name }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
  const routes = [
    {name: "HOME", path: "/"},
    {name: "ABOUT", path: "/about"},
  ];
</script>

<style scoped></style>
