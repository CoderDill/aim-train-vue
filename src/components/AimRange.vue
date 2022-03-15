<template>
  <div class="aimRange">
    <h1>Score: {{ score }} Timer: {{ timerCount }}</h1>
    <div v-if="isRunning" class="target" @click="addScore"></div>
    <div class="btn-container">
      <button v-if="!isRunning && gameOver" @click="startGame" class="btn">
        Start
      </button>
      <button v-if="!isRunning && !gameOver" @click="reset" class="btn">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
import AimApi from "../api/AimApi";

export default {
  components: {},
  data() {
    return {
      score: 0,
      timerCount: 3,
      isRunning: false,
      gameOver: true,
      rewards: [],
      userId: 1,
    };
  },
  watch: {
    timerCount(newTime) {
      if (newTime === 0) {
        this.isRunning = false;
        this.gameOver = false;
        this.fetchReward();
        clearInterval(this.interval);
      }
    },
  },
  methods: {
    startGame() {
      this.isRunning = true;
      this.gameOver = false;
      this.interval = setInterval(() => {
        this.timerCount--;
      }, 1000);
    },
    addScore() {
      this.score++;
    },
    reset() {
      this.score = 0;
      this.timerCount = 3;
      this.gameOver = true;
    },
    async fetchReward() {
      this.rewards = await (
        await fetch("https://valorant-api.com/v1/agents")
      ).json();

      if (this.score > 10) {
        AimApi.setReward({
          name: this.rewards.data[0].name,
          image: this.rewards.data[0].bustPortrait,
          user_id: this.userId,
        });
      }
      if (this.score > 20) {
        AimApi.setReward({
          name: this.rewards.data[1].name,
          image: this.rewards.data[0].bustPortrait,
          user_id: this.userId,
        });
      }
      if (this.score > 25) {
        AimApi.setReward({
          name: this.rewards.data[2].name,
          image: this.rewards.data[0].bustPortrait,
          user_id: this.userId,
        });
      }
      if (this.score > 30) {
        AimApi.setReward({
          name: this.rewards.data[3].name,
          image: this.rewards.data[0].bustPortrait,
          user_id: this.userId,
        });
      }
    },
  },
};
</script>

<style>
h1 {
  color: plum;
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
  background-color: rgb(160, 97, 160); /* Green */
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
