<template>
    <div class="header">
        <i class="iconfont icon-fanhui header-back"></i>
        <div class="header-input">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="输入城市/景点/游玩主题">
        </div>
        <router-link to='/city' class="header-right">
          <span>{{city}}</span><i class="iconfont icon-jiantou"></i>
        </router-link> 
    </div>
</template>

<script>
    export default {
        name:'Header',
        data() {
            return {}
        },
        computed:{
          city(){return this.$store.state.city}
        }
    }
</script>

<style lang="stylus" scoped>
.header
  display:flex
  height:.88rem
  background-color:#00bcd4
  line-height:.88rem
  color:#fff
  .header-back
    width:.88rem
    text-align:center
  .header-input
    flex:1
    background-color:#fff
    line-height:.64rem
    height:.64rem
    padding-left:.1rem
    margin-top:.12rem
    border-radius:.1rem
    .icon-sousuo
      color:#ccc
      vertical-align middle
    input
      width:80%
      vertical-align middle
      font-size:.26rem
      color:#eee
  .header-right
    padding:0 .15rem
    color:white
    span
      vertical-align top
    .icon-jiantou
      font-size:.24rem
      vertical-align top
</style>
