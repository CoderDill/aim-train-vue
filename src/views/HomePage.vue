<template>
  <div className="homepage">
      <h1>Aim Train</h1>
      <p>First person shooter aim trainer.</p>
      <router-link to="/aim">
        Aim Here!
      </router-link>
    </div>
    <router-view></router-view>
</template>

<script>

export default {
    name: 'HomePage',
    components: {
        
    }
}
</script>

<style>
  .homepage {
    margin-top: 30vh;

  }
</style>