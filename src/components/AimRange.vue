<template>
  <div class="aimRange">
    <h1>Score: {{ score }} Timer: {{ timerCount }}</h1>
    <Countdown :showDays="false" :showHours="false" :showMinutes="false"/>
  </div>
</template>

<script>
import { Countdown } from 'vue3-flip-countdown'

export default {
  components: {
    Countdown,
  },
  data() {
    return {
      score: 0,
      timerCount: 60
    }
  },
  watch: {
    timerCount(newTime, oldTime) {
      if (newTime > 0) {
        setTimeout(() => {
          this.timerCount--
        })
      } else {
        console.log(oldTime)
      }
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