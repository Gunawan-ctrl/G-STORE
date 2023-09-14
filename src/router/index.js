import { createRouter, createWebHistory } from "vue-router";
import store from "@/store/store";
import HomeView from "../views/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Acces/LoginBox.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/Acces/SignupBox.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../views/ShopView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartView.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../views/CheckoutView.vue"),
    beforeEnter: (to, from, next) => {
      if (store.state.user) {
        next();
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/cart/:id",
    name: "cartItem",
    component: () => import("../views/CartItemView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
