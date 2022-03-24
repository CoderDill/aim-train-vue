<template>
<div class="nav">
  <router-link to="/"><h1>Aim Train</h1></router-link>
  <div class="nav-links">
    <router-link to='/profile'>Profile</router-link>
    <router-link to='/login'>Sign In</router-link>
    <router-link to='/signup'>Sign Up</router-link>
    <button @click="setUserId">click</button>
  </div>
</div>
  <router-view></router-view>
</template>

<script>


export default {
  name: "App",
  methods: {
      setUserId() {
      this.$store.commit('setUser', {id: 1});
      console.log(this.$store.state.userId)
      }
  }
}
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
  margin-top: 20px;
  background-color: black;
}
.nav {
    display: flex;
    margin: 0;
    padding-left: 10px;
    background-color: black;
    justify-content: space-between;
}
.nav-links a{
    color: plum;
    padding: 10px;
}
h1 {
  text-decoration: none;
}
</style>
