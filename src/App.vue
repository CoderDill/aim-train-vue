<template>
  <button v-on:click="timerCount">Start</button>
  <AimRange v-bind:score="score" v-bind:timerCount="timerCount"/>
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
      timerCount: 60
    }
  },
  watch: {
    timerCount: {
      handler(newVal) {
        if (newVal > 0) {
          setTimeout(() => {
            this.timerCount--
          }, 1000)
        }
      }
    }
  }
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
