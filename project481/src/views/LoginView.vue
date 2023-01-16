<template>
  <!-- component -->
  <div class="bg-indigo-400 h-screen w-screen">
    <div
      class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0"
    >
      <div
        class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0"
        style="height: 500px"
      >
        <div class="flex flex-col w-full md:w-1/2 p-4">
          <div class="flex flex-col flex-1 justify-center mb-8">
            <h1 class="text-4xl text-center font-thin">Welcome Back</h1>
            <div class="w-full mt-4">
              <Form @submit="handleLogin" :validation-schema="schema">
                <div class="flex flex-col mt-4">
                  <Field
                    id="username"
                    type="text"
                    class="flex-grow h-8 px-2 border rounded border-grey-400"
                    name="username"
                    value=""
                    placeholder="Username"
                  />
                </div>
                <ErrorMessage name="username" class="error-feedback" />
                <div class="flex flex-col mt-4">
                  <Field
                    id="password"
                    type="password"
                    class="flex-grow h-8 px-2 rounded border border-grey-400"
                    name="password"
                    required
                    placeholder="Password"
                  />
                </div>
                <ErrorMessage name="password" class="error-feedback" />
                <div class="flex items-center mt-4">
                  <Field
                    type="checkbox"
                    name="remember"
                    id="remember"
                    class="mr-2"
                  />
                  <label for="remember" class="text-sm text-grey-dark"
                    >Remember Me</label
                  >
                </div>
                <div class="flex flex-col mt-8">
                  <button
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                  >
                    Login
                  </button>
                </div>
              </Form>
              <div class="text-center mt-4">
                <a
                  class="no-underline hover:underline text-blue-dark text-xs"
                  href="{{ route('password.request') }}"
                >
                  Forgot Your Password?
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="hidden md:block md:w-1/2 rounded-r-lg"
          style="
            background: url('https://images2.fanpop.com/images/photos/6000000/Code-Geass-code-geass-6006914-1243-1451.jpg');
            background-size: cover;
            background-position: center center;
          "
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import AuthService from "@/services/AuthService.js";
export default {
  name: "LoginView",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Username is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      loading: false,
      message: "",
      schema,
    };
  },
  methods: {
    handleLogin(user) {
      AuthService.login(user)
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "home" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>
