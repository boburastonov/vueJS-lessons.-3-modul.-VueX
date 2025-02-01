<template>
  <div>
    <h1>Home Page {{ counter }}</h1>
    <div class="w-25">
      <Button @click="increaseHandler">Increase</Button>
    </div>
    <div class="w-25">
      <Button @click="decreaseHandler">Decrease</Button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const counter = computed(() => store.state.count);
const increaseHandler = () => store.commit("increment");
const decreaseHandler = () => store.commit("decrement");
</script>

<style></style>
