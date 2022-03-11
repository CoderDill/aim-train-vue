<template>
  <div class="aimRange">
    <h1>Score: {{ score }} Timer: {{ timerCount }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: 0,
      timerCount: 60
    }
  },
  
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