<template>
  <nav>
    <div
      class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom"
    >
      <a
        class="d-flex align-items-center link-body-emphasis text-decoration-none"
        @click="$router.push({ name: 'home' })"
      >
        <img class="w-25" src="../../public/logo.png" alt="logo" />
      </a>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <a class="me-3 py-2 link-body-emphasis text-decoration-none">
          <router-link :to="{ name: 'login' }">Login</router-link>
        </a>
        <a class="me-3 py-2 link-body-emphasis text-decoration-none"
          ><router-link :to="{ name: 'register' }">Register</router-link></a
        >
      </nav>
    </div>
  </nav>
</template>
<script>
import { logo } from "@/constants";
export default {
  data() {
    return {
      logo,
    };
  },
};
</script>
<style></style>
