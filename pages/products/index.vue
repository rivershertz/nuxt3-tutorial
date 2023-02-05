<template>
  <div class="h-[85vh] overflow-y-scroll">
    <h2>PRODUCTS</h2>
    <div class="grid grid-cols-4 gap-10 overflow-y-scroll px-5 py-10">
      <ProductCard
        :data="product"
        v-for="product in products"
      />
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: "products",
  });

  const {data: products} = await useFetch("https://fakestoreapi.com/products");

  useHead({
    title: "Nahars Nuxt | Merch",
    meta: [{name: "description", content: "Some fake api products for fun"}],
  });
</script>

<style scoped>
  h2 {
    font-size: 100px;
  }
</style>
