<template>
  <main class="form-signin w-25 m-auto">
    <form>
      <img
        src="../../public/logo.png"
        alt="logo"
        style="width: 130px; cursor: pointer"
      />
      <h1 class="h3 mb-3 fw-normal">Register</h1>
      <Input :type="'text'" :label="'Name'" />
      <Input :type="'email'" :label="'Email address'" />
      <Input :type="'password'" :label="'Password'" />

      <Button type="submit" @click="submitHandler" :disabled="isLoading">{{
        isLoading ? "Loading..." : "Sign up"
      }}</Button>
    </form>
  </main>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const isLoading = computed(() => store.state.auth.isLoading);
const submitHandler = (e) => {
  e.preventDefault();
  store.commit("setLoading");
};
</script>
<style></style>
