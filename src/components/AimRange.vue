<template>
<div>
  <button @click="startGame">Start</button>
</div>
  <div class="aimRange">
    <h1>Score: {{ score }} Timer: {{ timerCount }}</h1>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {
      score: 0,
      timerCount: 60,
      running: false
    }
  },
  watch: {
    timerCount(newTime) {

      if (newTime === 0) {
        clearInterval(this.interval)
      }
    }
  },
  methods: {
    startGame() {
      this.interval = setInterval(() => {
        this.timerCount--
        this.running = true
      }, 1000);
    }
  }
};
</script>

<style>
.aimRange {
  position: relative;
  display: block;
  height: 80vh;
  background-image: url(../assets/range_bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: black;
  cursor: crosshair;
  overflow: hidden;
}
</style>