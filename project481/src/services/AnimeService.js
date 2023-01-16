import apiClient from "@/services/AxiosClient.js";
import GStore from "@/store";

export default {
  getAnimeTitle(query) {
    console.log(query);
    return apiClient.post("/animeTitle", query).then((response) => {
      console.log(response.data);
      GStore.animeList = response.data;
    });
  },
  getAnimeDescription(query) {
    return apiClient.post("/animeDescription", query).then((response) => {
      console.log(response.data);
      GStore.animeList = response.data;
    });
  },
};
