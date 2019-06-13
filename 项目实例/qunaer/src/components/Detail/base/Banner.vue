<template>
  <div class="container">
      <div class="img">
        <img :src='bannerImg' alt="" @click='change'>
      <div class="text">
        <p>{{sightName}}</p>
       <i class="iconfont icon-tupian" >{{gallaryImgs.length}}</i>
      </div>
      </div>
  </div>
</template>
<script>

  export default {
    props:['bannerImg','sightName','gallaryImgs'],
    data(){
      return {}
    },
    methods:{
      change(){

        this.$emit('close')
      }
    }
  }
</script>
<style lang='stylus' scoped>
.container
  .img
    img 
      width:100%
  .text
    position absolute
    padding:.2rem
    right:0
    left:0
    top:4.5rem
    margin:auto
    background-color:black
    color:white
    font-size:.4rem
    p
      float:left
    i 
      float:right

</style>