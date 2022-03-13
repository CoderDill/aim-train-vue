<template>
<div>
  <button v-if="!isRunning" @click="startGame">Start</button>
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
      timerCount: 5,
      isRunning: false
    }
  },
  watch: {
    timerCount(newTime) {
      if (newTime === 0) {
        this.isRunning = false;
        clearInterval(this.interval)
      }
    }
  },
  methods: {
    startGame() {
      this.isRunning = true;
      this.interval = setInterval(() => {
        this.timerCount--
      }, 1000);
    },
    addScore() {
      this.score++
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