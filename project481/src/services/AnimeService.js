import apiClient from "@/services/AxiosClient.js";
import GStore from "@/store";

export default {
  getAnimeTitle(query) {
    return apiClient.post(`/animeTitle`, query).then((res) => {
      GStore.animeList = res.data;
      console.log(GStore.animeList);
    });
  },
  getAnimeDescription(query) {
    return apiClient.post(`/animeDescription`, query).then((res) => {
      GStore.animeList = res.data;
    });
  },
};
