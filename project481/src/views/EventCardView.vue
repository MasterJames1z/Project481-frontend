<template>
  <div class="grid grid-cols-4 gap-5 p-[50px]">
    <EventCard
      v-for="item in GStore.animeList"
      :key="item.mal_id"
      :item="item"
    />
    <!-- {{ GStore.animeList }} -->
  </div>
</template>
<script>
import EventCard from "../components/Card.vue";
export default {
  inject: ["GStore"],
  name: "event-card",
  components: {
    EventCard,
  },
};
</script>
