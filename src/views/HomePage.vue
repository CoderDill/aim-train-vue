<template>
  <div class="homepage">
    <h1 class="font-bold">Aim Train</h1>
    <p>First person shooter aim trainer.</p>
    <router-link to="/aim" class="text-white underline">
      Aim Here!
    </router-link>
  </div>
  <router-view></router-view>
</template>

<script setup>

</script>

<style>
.homepage {
  margin-top: 30vh;
}
p {
  color: white;
}
</style>