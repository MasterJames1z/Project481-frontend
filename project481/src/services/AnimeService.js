import apiClient from "@/services/AxiosClient.js";
import GStore from "@/store";

export default {
  getAnimeTitle(query) {
    console.log(query);
    return apiClient
      .post("/animeTitle", query)
      .then((response) => {
        console.log(response.data);
        var KeepData = JSON.stringify(response.data);
        console.log(JSON.parse(KeepData));
        var KeepData2 = JSON.parse(KeepData);
        GStore.animeList = KeepData2;
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
  getAnimeDescription(query) {
    return apiClient
      .post("/animeDescription", query)
      .then((response) => {
        console.log(response.data);
        var keep = JSON.stringify(response.data);
        console.log(JSON.parse(keep));
        var keep2 = JSON.parse(keep);
        GStore.animeList = keep2;
      })
      .catch((error) => {
        return console.log(error);
      });
  },
};
