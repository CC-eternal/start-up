<template>
  <div class='week'>
    <div class="nav"> <router-link to="/" tag="i" class="iconfont icon-fanhui"></router-link> 真好</div>
    <ul class="list" v-for='(item,index) in weekInfo' :key="index">
      <li class="content">
        <div class="imgs">
          <img :src="item.imgUrl" alt="" @click = goDet>
        </div>
        <div class="text">
          <div class="name"> {{item.title}} </div>
          <div class="price"><span>{{item.price}}</span>起</div>
        </div>
        <div class="intro"> {{item.desc}} </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {getWeek} from '@/api'
  export default {
    data(){
      return{
        weekInfo:[]
      }
    },
    methods:{
      async getData(){
        let {weekInfo} = await getWeek(this.$route.params.id);
        this.weekInfo = weekInfo
      },
      goDet(){
        console.log(1)
        this.$router.push({
          path:'/detail',
          query:{
            id:this.$route.params.id
          }
        })
      }
    },
    activated(){
      this.getData()
    }
  }
</script>
<style lang='stylus'scoped>
  .week
    .nav
      padding 0 .2rem
      background-color #00BCD4
      text-align center
      line-height .8rem
      font-size .4rem
      color white
      i 
        float left 
    .list
      .imgs
        width:100%
        img 
          width:100%
          height:4rem
      .text
        padding:.2rem
        font-size:.35rem
        line-height .5rem
        &::after 
          content ''
          display:block
          clear both
        .name
          float:left
        .price
          float:right
          span
            color:#FF8352
      .intro
        font-size:.3rem
        padding .2rem
        
</style>