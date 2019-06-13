<template>
  <swiper :options="swiperOption" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for='(item,index) in filterImgs' :key='index'>
        <div class="nav">
            <div class="swiper">
             <div class="content" >
                <ul>
                 <li v-for=' data in item' :key='data.id'>
                    <a href="">
                        <img :src='data.imgUrl' alt="">
                         <div>{{data.desc}}</div>
                    </a>
                </li>
             </ul>
          </div>
        </div>
    </div>
  </swiper-slide>
            <!-- Optional controls -->
<div class="swiper-pagination"  slot="pagination"></div>
</swiper>

</template>
<script>
    export default {
        props:['iconList'],
        data(){
            return {
                 swiperOption: {
                     //定义按钮
                       pagination: {
                          el: '.swiper-pagination'
                       },
                       loop:true
                },
                newArr:[]
            }
        },
        computed:{
            filterImgs(){
                let imgs = []
                this.iconList.forEach((value,index)=>{
                    let page = ~~(index/8)
                    if(!imgs[page]){
                        imgs[page] = []
                    }
                    imgs[page].push(value)
                })
                return imgs
            }
        }
    }
</script>
<style lang = 'stylus' scoped>
    .nav
        ul
            display:flex
            flex-wrap:wrap
            li
                width:25%
                height:1.6rem  
                margin:.3rem 0
                text-align:center
                img
                    width:60%

                
                

</style>