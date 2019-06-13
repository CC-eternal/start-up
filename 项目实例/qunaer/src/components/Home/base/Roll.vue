<template>
    <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item) in swiperList" :key = "item.id"><img :src="item.imgUrl" alt=""></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
     </swiper>
    </div>
</template>
<script>
    
    export default {
        props:['swiperList'],
        data(){
            return {
                 swiperOption: {
                     //定义按钮
                       pagination: {
                          el: '.swiper-pagination'
                       },
                       loop:true,
                       autoplay:true
                },
                
            }
        }
    }
</script>
<style lang='stylus'scoped>
.swiper >>> .swiper-pagination-bullet-active
    background-color #ccc 
.swiper
    img
        width:100%

</style>