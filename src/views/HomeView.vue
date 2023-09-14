<template>
  <main-header />
  <section class="hero__section">
    <div class="container">
      <div class="hero__text">
        <h4>Belanja Online Bebas Resiko</h4>
        <h1>Dapatkan Gadget Impianmu</h1>
        <h2>Cari disini</h2>
        <p>Hemat lebih banyak dengan kupon dan dapatkan diskon hingga 70%!</p>
        <router-link to="/shop">
          <action-button btnvalue="Belanja Sekarang" />
        </router-link>
      </div>
    </div>
  </section>
  <section class="feature__section">
    <div class="container">
      <Smartphones :Smartphones="Smartphones" />
    </div>
  </section>

  <Laptops :Laptops="Laptops" />
  <main-footer />
</template>

<script>
import Laptops from "@/components/home_components/products/Laptops.vue";
import Smartphones from "@/components/home_components/products/Smartphones.vue";
import ActionButton from "@/components/ActionButton.vue";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
import axios from "axios";

export default {
  components: {
    Laptops,
    Smartphones,
    ActionButton,
    MainHeader,
    MainFooter,
  },
  name: "HomeView",
  data() {
    return {
      products: [],
      laptops: [],
    };
  },
  computed: {
    Smartphones() {
      return this.products;
    },
    Laptops() {
      return this.laptops;
    },
  },
  async created() {
    await this.getProduct();
  },
  methods: {
    async getProduct() {
      try {
        const response1 = await axios.get(
          "https://dummyjson.com/products/category/smartphones"
        );
        const data1 = response1.data.products.map((product) => {
          product.images = product.thumbnail;
          return product;
        });

        const response2 = await axios.get(
          "https://dummyjson.com/products/category/laptops"
        );
        const data2 = response2.data.products.map((laptop) => {
          laptop.images = laptop.thumbnail;
          return laptop;
        });

        this.products = data1;
        this.laptops = data2;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>

<style scoped>
.hero__section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 65px);
  background-image: url("@/assets/images/smartphone.png");
  background-position: 60% 30%;
  background-size: cover;
}

.hero__text {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}

.hero__text h4 {
  padding-bottom: 1rem;
}

.hero__text h1 {
  color: var(--dim-blue);
}

.hero__text p {
  margin-bottom: 1rem;
}

@media (min-width: 2000px) {
  .hero__section {
    background-position: 70% 12%;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #e3e6f3;
    height: 50vh;
  }
}

@media (min-width: 3000px) {
  .hero__section {
    background-position: 60% 30%;
  }
}
</style>
