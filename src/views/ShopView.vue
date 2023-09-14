<template>
  <main-header />
  <sub-header
    heading="#Shop"
    subHeading="Hemat lebih banyak dengan kupon hingga 70% !"
  />
  <div class="container">
    <div class="product__container" v-if="loaded">
      <product-card
        v-for="(product, index) in products"
        :key="index"
        :productId="product.id"
        :productTitle="product.title"
        :brand="product.brand"
        :price="product.price"
        :category="product.category"
        :image_url="product.images"
        :stock="product.stock"
      />
    </div>
    <product-preloader v-else> Loading products... </product-preloader>
  </div>

  <main-footer />
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import ProductCard from "@/components/home_components/cards/ProductCard.vue";
import ProductPreloader from "@/components/preloaders/ProductPreloader.vue";

import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

import axios from "axios";

export default {
  name: "ShopView",
  components: {
    SubHeader,
    ProductCard,
    MainHeader,
    MainFooter,
    "product-preloader": ProductPreloader,
  },
  data() {
    return {
      products: [],
      loaded: false,
    };
  },
  async created() {
    await this.getProducts();
  },
  methods: {
    async getProducts() {
      this.loaded = false;
      try {
        const response = await axios.get("https://dummyjson.com/products");
        const products = response.data.products.slice(0, 12);
        this.products = products.map((product) => {
          product.images = product.thumbnail;
          return product;
        });
        this.loaded = true;
      } catch (error) {
        console.error(error);
        this.loaded = false;
      }
    },
  },
};
</script>

<style>
.btn {
  border: none;
  background-color: #f2f2f2;
  padding-inline: 20px;
  height: 40px;
  border: 2px solid var(--grey-2);
  font-size: 1.7rem;
  margin-inline: 5px;
  cursor: pointer;
}

.back-btn,
.next-btn {
  background-color: #f2f2f2;
  color: black;
}

.btn:hover {
  background-color: #083e46;
  border-color: #083e46;
  color: white;
}

.btn-active {
  background-color: #083e46;
  color: white;
  border-color: #083e46;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}
</style>
