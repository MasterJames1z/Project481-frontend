<template>
  <nav
    class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="/" class="flex items-center">
        <!-- <img
          src="https://cdn.pixabay.com/photo/2017/04/08/18/17/correct-2214020_960_720.png"
          class="h-6 mr-3 sm:h-9"
          alt="Flowbite Logo"
        /> -->
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >MiniProject481</span
        >
      </a>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-search"
      >
        <div>
          <select
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="TItle">Titel</option>
            <option value="Description">Description</option>
          </select>
        </div>
        <div class="relative hidden md:block">
          <Form
            @submit="onSearch"
            :validation-schema="schema"
            class="flex items-center"
          >
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <Field
                type="input"
                name="query"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search.."
                required
              />
            </div>
            <button
              type="submit"
              class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </Form>
        </div>
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="/"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="about"
              class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >About</a
            >
          </li>
          <span>
            <p class="text-white" v-if="GStore.currentUser">
              User: {{ GStore.currentUser.username }}
            </p>
          </span>
          <button
            class="w-5 h-5 text-gray-500"
            v-if="$route.name == 'login'"
            @click="$router.push('login')"
          >
            Login
          </button>
          <button
            v-if="$route.name != 'login'"
            @click="handleLogout"
            class="w-5 h-5 text-gray-500"
          >
            Logout
          </button>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import AuthService from "@/services/AuthService.js";
import AnimeService from "@/services/AnimeService.js";
import * as yup from "yup";
import { Field, Form } from "vee-validate";
export default {
  name: "navbar-component",
  inject: ["GStore"],
  components: { Field, Form },
  data() {
    const schema = yup.object().shape({
      query: yup.string(),
    });
    return {
      // loading: false,
      // message: "Syetem cannot loading",
      schema,
      select: null,
      choice: [{ name: "Title" }, { name: "Description" }],
      choose: {
        name: "Select search",
      },
    };
  },

  methods: {
    handleLogout() {
      AuthService.logout();
      this.$router.push("/login");
    },
    // onSearch(input) {
    //   console.log(input);
    //   AnimeService.getAnimeTitle(input);
    //   this.$router.push("/anime");
    // },
    onSearch(query) {
      if (
        this.choose.name == "Selected search" ||
        this.choose.name == "Title"
      ) {
        AnimeService.getAnimeTitle(query);
        console.log("searchbytitle");
        setTimeout(() => this.$router.push("anime"), 200);
      } else {
        AnimeService.getAnimeDescription(query);
        setTimeout(() => this.$router.push("anime"), 200);
      }
    },
  },
};
</script>
