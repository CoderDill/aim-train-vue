<template>
  <div class="nav">
  <router-link to="/"><h1>Aim Train</h1></router-link>
  <div class="nav-links">
    <router-link v-if="username" to='/profile'>Profile</router-link>
    <div v-else>
    <router-link to='/login'>Sign In</router-link>
    <router-link to='/signup'>Sign Up</router-link>
    </div>
  </div>
</div>
</template>

<script setup>
import {useStore} from 'vuex'

const store = useStore()
const username = store.state.username

</script>

<style scoped>
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
</style>