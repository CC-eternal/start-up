<template>
  <div id="app">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Home from '@/components/Home/Home'
export default {
  name: 'App',
}
</script>

<style>
</style>
