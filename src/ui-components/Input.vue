<template>
  <div class="form-floating mt-3">
    <input
      class="form-control"
      :type="type"
      id="floatingPassword"
      :placeholder="label"
    />
    <label for="floatingPassword">{{ label }}</label>
  </div>
</template>
<script setup>
defineOptions({
  name: "Input",
});

defineProps({
  name: String,
  label: String,
  type: String,
});
</script>
<style></style>
