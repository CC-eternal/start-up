<template>
  <div class="container" >
    <h3>周末去哪儿</h3>
    <ul>
      <router-link v-for="item in weekendList" :key='item.id' :to="{name:'weeklink',params:{id:item.id},tag:'li'}">
        <div class="img">
          <img :src='item.imgUrl' alt="">
        </div>
        <h3>{{item.title}}</h3>
        <div class="intro">{{item.desc}}</div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import { touch } from "@/components/Home/base/Week";
  export default {
    props:['weekendList'],
    methods:{
    },
  }
</script>
<style lang='stylus' scoped>
  .container
    background-color:#eee
    li
      padding:.2rem
      .img
        text-align:center
        img 
          width:100%
    h3
      padding 0.3rem
      background-color:#eee
    .intro
      padding .3rem
      background-color: #fff  
    li::after 
      content:''
      display:block
      border-bottom: 1px solid #ccc
</style>