<template>
  <div class="h-[85vh]">
    <Head>
      <Title>Nahars Nuxt | {{ product.title }}</Title>
      <Meta
        name="description"
        :content="product.description"
      ></Meta>
    </Head>
    <ProductDetails :data="product" />
  </div>
</template>

<script setup>
  const {id} = useRoute().params;

  const url = "https://fakestoreapi.com/products/" + id;

  const {data: product} = await useFetch(url, {key: id});
  if (!product.value) {
    throw createError({
      statusCode: 404,
      statusMessage: "Product not found",
      fatal: true,
    });
  }

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
