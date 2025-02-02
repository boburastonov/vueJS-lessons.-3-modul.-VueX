<template>
  <nav>
    <div
      class="d-flex flex-column flex-md-row align-items-center py-3 mb-4 border-bottom"
    >
      <a
        class="d-flex align-items-center link-body-emphasis text-decoration-none"
        @click="$router.push({ name: 'home' })"
      >
        <img
          src="../../public/logo.png"
          alt="logo"
          style="width: 130px; cursor: pointer"
        />
      </a>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <router-link
          class="me-3 py-2 link-body-emphasis text-decoration-none"
          :to="{ name: 'login' }"
        >
          Login
        </router-link>
        <router-link
          class="me-3 py-2 link-body-emphasis text-decoration-none"
          :to="{ name: 'register' }"
        >
          Register
        </router-link>
      </nav>
    </div>
  </nav>
</template>
<script></script>
<style></style>
