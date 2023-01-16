<template>
  {{ GStore.animeList }}
  <!-- <div v-for="item in GStore.animeList" :key="item.aired">
    {{ item.mal_id }}
    {{ item.title }}
    {{ item.images }}
  </div> -->
</template>
<script>
export default {
  inject: ["GStore"],
};
</script>
