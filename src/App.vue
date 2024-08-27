<template>
      <router-link :to="{ name: 'home' }">Home</router-link>| 
      <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
}
</script>