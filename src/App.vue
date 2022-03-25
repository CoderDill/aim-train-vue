<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import AimApi from '@/api/AimApi';

export default {
  name: "App",
  components: {
    NavBar
},
  methods: {
      async setUserName() {
      let username = await AimApi.getCurrUser()
      this.$store.commit('setUser', {username});
      console.log(this.$store.state.username)
      },
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
</style>
