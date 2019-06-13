<template>
<div class="gallery">
 <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="(item,index) in gallaryImgs" :key="index" class="swiper-slide">
      <img :src="item" alt="" @click='change(item)'>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
  export default {
    props:['gallaryImgs'],
    data(){
      return {
        swiperOption:{
          autoplay:true,
          pagination:{
            el:'.swiper-pagination',
            type:'fraction'
           },
           observeParents:true,
           observer:true
        },
      }
    },
    methods:{
      change(item){
        this.$emit('close')
      }
    },
    mounted(){
      var mySwiper = new Swiper('.swiper-container',{
        autoplay:true,
        loop:true
      })
    },
  }
</script>
<style lang='stylus' scoped>
  .gallery
    position fixed
    z-index: 10
    left 0
    right 0
    top 0
    bottom 0
    background-color: #000
    img 
      margin-top:4rem
      width:100%
    .swiper-pagination
      bottom 0rem
      color:white
</style>