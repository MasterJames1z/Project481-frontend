<template>
  <div
    class="flex flex-col justify-center items-center max-w-sm overflow-hidden rounded-xl bg-red-200 shadow-md duration-200 hover:scale-105 hover:shadow-xl mr-4"
  >
    <!-- example of content -->
    <img :src="item.images" alt="images" class="h-auto w-full" />
    <div>
      <p class="text-medium mb-5 text-gray-700 text-center mt-6 capitalize">
        {{ item.title }}
      </p>
    </div>
    <router-link
      :to="{ name: 'detail', params: { id: item.mal_id } }"
      class="bg-white border-1 px-3 py-2"
      @click="detail"
      >Detail</router-link
    >
  </div>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    item: {
      type: Object,
      required: "true",
    },
  },
};
</script>
