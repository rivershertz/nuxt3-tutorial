<template>
  <div>
    <h2>PRODUCTS</h2>
    <div class="grid grid-cols-4 gap-10">
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
</script>

<style scoped>
  h2 {
    font-size: 100px;
  }
</style>
