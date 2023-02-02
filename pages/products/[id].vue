<template>
  <div>
    <h2>Product ID: {{ id }}</h2>
    <p>{{ product.title }}</p>
  </div>
</template>

<script setup>
  const {id} = useRoute().params;

  const url = "https://fakestoreapi.com/products/" + id;

  const {data: product} = await useFetch(url, {key: id});

  definePageMeta({
    layout: "products",
  });
</script>

<style scoped>
  h2 {
    font-size: 100px;
  }
  pre {
    font-size: 60px;
  }
</style>
