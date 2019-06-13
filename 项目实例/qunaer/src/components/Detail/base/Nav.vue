<template>
  <div class="container">
    <div class="nav">
      <router-link  to='/' class="n-left"> <i class="iconfont icon-fanhui"></i></router-link>
      <div class='text' v-show="isshow" :style='styleObj'>
        <router-link  to='/' class="p-left"> <i class="iconfont icon-fanhui"></i></router-link>
        <div class="title" >{{sightName}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:['sightName'],
    data(){
      return{
        isshow:false,
        styleObj:{
        }
      }
    },
    methods:{
      getScroll(){
        let scrollTop = document.documentElement.scrollTop
        if(scrollTop>150){
           this.isshow=true
            this.styleObj={
            opacity:(scrollTop-150)/100
          }
        }else{
          this.isshow=false
       }
      }
    },
    //当组件被激活时创建
    activated(){
      window.addEventListener('scroll',this.getScroll)
    },
    deactivated(){
      window.removeEventListener('scroll',this.getScroll)
    }
  }
</script>
<style lang='stylus'scoped>
  .container
    position fixed
    top:0
    width:100%
    .nav
      color:white
      font-size:.35rem
      .n-left
        position relative
        float:left 
        width:.6rem
        height .6rem
        background-color rgba(0,0,0,.5)
        font-weight:bold
        border-radius .5rem
        z-index -1
        i 
          position absolute
          top 0
          bottom 0
          left  0
          right 0
          width:16px
          height:16px
          margin auto 
          color:white
      .p-left
        position fixed
        left:.2rem
        color:white
        line-height .6rem
      .title
        background-color #00BCD4
        text-align:center
        line-height :.6rem
      
</style>