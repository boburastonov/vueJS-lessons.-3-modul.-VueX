<template>
  <main class="form-signin w-25 m-auto">
    <form>
      <img
        src="../../public/logo.png"
        alt="logo"
        style="width: 130px; cursor: pointer"
      />
      <h1 class="h3 mb-3 fw-normal">Login</h1>
      <Input :type="'email'" :label="'Email address'" />
      <Input :type="'password'" :label="'Password'" />

      <Button type="submit">Sign in</Button>
    </form>
  </main>
</template>
<script>
export default {};
</script>
<style></style>
