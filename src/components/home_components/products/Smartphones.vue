<template>
  <section class="products">
    <h2>Smartphones</h2>
    <p class="highlight">The latest products we have on sale</p>
    <div class="product__container" v-if="Smartphones">
      <product-card
        v-for="product in Smartphones"
        :key="product"
        :productId="product.id"
        :productTitle="product.title"
        :brand="product.brand"
        :price="product.price"
        :category="product.category"
        :image_url="product.images"
        :stock="product.stock"
      />
    </div>
    <product-preloader type="inline" v-else>
      Loading products...
    </product-preloader>
  </section>
</template>

<script>
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
import ProductPreloader from "@/components/preloaders/ProductPreloader.vue";
export default {
  name: "Smartphones",
  components: {
    ProductCard,
    ProductPreloader,
  },
  props: ["Smartphones"],
};
</script>

<style>
.products {
  text-align: center;
}

.products h2 {
  display: inline-block;
  margin-bottom: 10px;
}

.products .highlight {
  font-size: 1.9rem;
}

.products h2::after {
  content: "";
  display: block;
  position: relative;
  margin-inline: auto;
  top: 2px;
  height: 3px;
  left: 0;
  width: 0;
  background-color: var(--text);
  border-radius: 6px;
  animation: play 2s infinite ease-in-out;
}

@keyframes play {
  from {
    width: 0;
  }
  50% {
    width: 70%;
  }
  to {
    width: 0;
  }
}

.product__container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding-block: 4rem;
}

@media (max-width: 1200px) {
  .product__container {
    justify-content: center;
  }
}

@media (max-width: 599px) {
  .product__container {
    justify-content: center;
    grid-template-columns: minmax(250px, 300px);
  }
}
</style>
