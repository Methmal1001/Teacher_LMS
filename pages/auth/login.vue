<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4">
    <div class="w-full max-w-md bg-white rounded-xl shadow-md p-8">
      <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Login</h1>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input v-model="loginDetails.email" type="text" placeholder="Enter email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <p v-if="err.loginDetails.email" class="text-red-500 text-sm mt-2">{{ err.loginDetails.email }}</p>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input v-model="loginDetails.password" type="password" placeholder="Enter password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <p v-if="err.loginDetails.password" class="text-red-500 text-sm mt-2">{{ err.loginDetails.password }}</p>

        <!-- Login Button -->
        <button type="submit"
          class="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
          Login
        </button>

        <!-- Error Message -->

        <!-- Links -->
        <div class="flex justify-between text-sm mt-2">
          <a href="/auth/resetpassword" class="text-blue-600 hover:underline">Forgot Password?</a>
          <a href="/auth/register" class="text-blue-600 hover:underline">Register</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import { useAuthStore } from "~/stores/AuthStore";

definePageMeta({
  layout: 'auth'
})

export default {
  data() {
    return {
      loginDetails: {
        email: "",
        password: "",
      },
      err: {
        loginDetails: {
          email: "",
          password: "",
        },
      },

      authStore: null,
      showPassword: false,
      showLoading: null,
    };
  },

  watch: {},
  created() {
    this.authStore = useAuthStore();
    this.showLoading = this.$showLoading;
  },
  computed: {},
  methods: {

    async handleLogin() {

      if (!this.IsValidate()) return;

      const redirectToCookie = useCookie("redirectTo");

      if (redirectToCookie.value !== undefined) {
        this.loginDetails.RequestedUrl = redirectToCookie.value;
      }

      await this.authStore.login(this.loginDetails, this.showLoading);

      //api Call using pinia
      try {
        var token = this.authStore.token;
        if (token === null) {
          this.$showToast("Login Failed!", "error");
        } else {
          //this.$showToast("Login successful!", "success");
          try {



            if (this.authStore.loggedUser.role === "Instructor") {
              this.$router.push("/lecturer");
            }
            else if (this.authStore.loggedUser.role === "Learner") {

              this.$router.push("/student");
            } else {

              this.$router.push("/admin");
            }

            // const redirectToCookie = useCookie("redirectTo");

            // if (redirectToCookie.value === undefined && this.authStore.redirectTo != '') {
            //   this.$router.push(this.authStore.redirectTo);
            // }
            // else if (redirectToCookie.value != "") {

            //   this.$router.push(redirectToCookie.value);
            // } else {

            //   this.$router.push("/dashboard");
            // }
          } catch (error) {

            this.$router.push("/dashboard");
          }
        }
      } catch (error) {
        this.$showToast(
          "Login failed. Please check your credentials.",
          "error"
        );
      }
    },

    IsValidate() {
      let isvalid = true;

      if (!this.loginDetails.email) {
        this.err.email = "Invalid Email!";
        isvalid = false;
      }

      if (!this.loginDetails.password) {
        this.err.password = "invalid Password!";
        isvalid = false;
      }

      return isvalid;
    },

    goToChangeLogin() {
      this.$router.push("/user/changelogin"); // Navigate to /user/changelogin
    },
    goToHomePage() {
      this.$router.push("/user/index"); // Navigate to /user/changelogin
    },
    goToRegister() {
      this.$router.push("/user/register"); // Navigate to /user/changelogin
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    validateLogin() { },
  },
};
</script>
