<template>
  <section class="products">
    <h2>Laptops</h2>
    <p class="highlight">The latest products we have on sale</p>
    <div class="container">
      <div class="product__container" v-if="Laptops">
        <product-card
          v-for="laptop in Laptops"
          :key="laptop"
          :productId="laptop.id"
          :productTitle="laptop.title"
          :brand="laptop.brand"
          :price="laptop.price"
          :category="laptop.category"
          :image_url="laptop.images"
          :stock="laptop.stock"
        />
      </div>
      <product-preloader type="inline" v-else>
        Loading laptop...
      </product-preloader>
    </div>
  </section>
</template>

<script>
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
import ProductPreloader from "@/components/preloaders/ProductPreloader.vue";
export default {
  name: "Laptops",
  components: {
    ProductCard,
    ProductPreloader,
  },
  props: ["Laptops"],
};
</script>
