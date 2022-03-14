<template>
  <div class="aimRange">
    <h1>Score: {{ score }} Timer: {{ timerCount }}</h1>
    <div v-if="isRunning" class="target" @click="addScore"></div>
    <div class="btn-container" >
    <button v-if="!isRunning && gameOver" @click="startGame" class="btn">Start</button>
    <button v-if="!isRunning && !gameOver" @click="reset" class="btn">Reset</button>
    </div>
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
      isRunning: false,
      gameOver: true
    }
  },
  watch: {
    timerCount(newTime) {
      if (newTime === 0) {
        this.isRunning = false;
        this.gameOver = false;
        clearInterval(this.interval)
      }
    }
  },
  methods: {
    startGame() {
      this.isRunning = true;
      this.gameOver = false;
      this.interval = setInterval(() => {
        this.timerCount--
      }, 1000);
    },
    addScore() {
      this.score++
    },
    reset() {
      this.score = 0;
      this.timerCount = 60;
      this.gameOver = true;
    }
  }
};
</script>

<style>
h1 {
  color: plum
}
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
.btn {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 30px;
}
.btn-container {
  margin: 0;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.target {
  height: 35px;
  width: 35px;
  border-radius: 50%;
  color: lavender;
  background-color: lavender;
}
</style>