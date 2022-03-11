<template>
  <AimRange score="score"/>
</template>

<script>
import AimRange from "./components/AimRange.vue";

export default {
  name: "App",
  components: {
    AimRange,
  },
  data() {
    return {
      score: 0,
    };
  },
};
</script>

<style>
html {
  background-color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
