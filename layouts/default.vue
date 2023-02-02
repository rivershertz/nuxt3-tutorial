<template>
  <div>
    <header class="flex w-full items-center justify-between border-b py-4 px-5">
      <NuxtLink
        to="/"
        class="text-4xl font-bold"
        >VueStore</NuxtLink
      >
      <nav>
        <ul class="flex items-center gap-16 text-lg">
          <li
            v-for="route in routes"
            class=""
          >
            <NuxtLink
              :to="route.path"
              class="relative after:absolute after:top-[120%] after:left-0 after:h-1 after:w-0 after:bg-green-500 after:opacity-0 after:duration-300 after:content-[''] hover:after:w-full hover:after:opacity-100"
              >{{ route.name }}</NuxtLink
            >
          </li>
          <NuxtLink
            to="/products"
            class="products"
            >PRODUCTS</NuxtLink
          >
        </ul>
      </nav>
    </header>
    <div><slot /></div>
  </div>
</template>

<script setup>
  const routes = [
    {name: "HOME", path: "/"},
    {name: "ABOUT", path: "/about"},
  ];
</script>

<style scoped>
  /* .router-link-exact-active {
    color: rgb(34 197 94);
  } */

  .router-link-active {
    color: rgb(34 197 94);
  }
</style>
