import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import EventCardView from "../views/EventCardView.vue";
import AnimeDetail from "../views/AnimeDetail.vue";
import GStore from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/event",
    name: "event",
    component: EventCardView,
  },
  {
    path: "/detail/:id",
    name: "detail",
    props: true,
    component: AnimeDetail,
    beforeEnter: (to) => {
      console.log(to.params.id);
      GStore.detail = GStore.animeList.filter(
        (itemInArray) => itemInArray.mal_id == to.params.id
      );
      console.log(GStore.detail);
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
