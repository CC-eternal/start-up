<template>
  <div class="comm">
    <h3 class="title">
      用户评论
    </h3>
    <div class="container" v-for="(value,index) in commentInfo" :key="index">
        <div class="slot" >
          <div class="star"><i class="iconfont icon-star" v-for=" (item,index) in 5" :key="index"></i></div>
          <div class="info">name  2018-1-1</div>
        </div>
        <div class="comment"> {{ value.desc}}</div>
        <div class="imgs">
          <ul @click='handGallery(value)'>
            <li v-for="(img,i) in value.imgs" :key='i' v-show="i<6">
              <img :src='img' alt="">
            </li>
            <span class="img-l" v-if='value.imgs.length>6'>共{{value.imgs.length}}张</span>
          </ul>
          <comm-fade>
             <comm-gallery v-show="value.isShow" :gallaryImgs='value.imgs' @close='close(value)'></comm-gallery>
          </comm-fade>
         
        </div>
      </div>
    </div>

</template>
<script>  
  import CommFade from '@/common/Fade'
  import CommGallery from '@/common/gallery/Gallery'
  export default {
    props:['commentInfo'],
    methods:{
      handGallery(value){
          value.isShow = !value.isShow
      },
      close(value){
       value.isShow = !value.isShow
      }
    },
    components:{
      CommGallery,
      CommFade
    }
  }
</script>
<style lang='stylus' scoped>
  .comm
    padding:.2rem
    .title
      padding .3rem 0
    .container
      .slot
        line-height .6rem
        &::after
          content:''
          display:block
          clear:both
        .star
          float left 
          color #FF8344
        .info
          float right
      .comment
         line-height .5rem
      .imgs
        ul
          position relative
          display:flex
          justify-content space-between
          flex-wrap:wrap
          height:4.5rem
          li
            width:31%
            margin-top .3rem
            border:1px solid #ccc
            img 
              width:100%
              height:100%
          .img-l
            position absolute
            right:.3rem
            bottom:.2rem
            color:white
          
    

      
</style>