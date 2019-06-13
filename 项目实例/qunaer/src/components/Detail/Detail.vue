<template>
  <div style="height:100rem">
    <det-banner :bannerImg = bannerImg :sightName = sightName :gallaryImgs = gallaryImgs @close='hand'></det-banner>
    <det-gallery :gallaryImgs = gallaryImgs v-show='isShow' @close='hand' @click='hand'></det-gallery>
    <det-card :cardInfo ='cardInfo'></det-card>
    <det-recommend :recommendInfo='recommendInfo'></det-recommend>
    <det-calendar :calendarInfo='calendarInfo'></det-calendar>
    <det-comment :commentInfo='commentInfo'></det-comment>
    <det-nav :sightName = sightName></det-nav>
  </div>
</template>
<script>
import {getDetail} from '@/api'
import DetBanner from '@/components/Detail/base/Banner'
import DetGallery from '@/common/gallery/Gallery'
import DetNav from '@/components/Detail/base/Nav'
import DetCard from '@/components/Detail/base/Card'
import DetRecommend from '@/components/Detail/base/Recommend'
import DetCalendar from '@/components/Detail/base/Calendar'
import DetComment from '@/components/Detail/base/Comment'
  export default {
    data(){
      return {
      bannerImg:'',
      commentInfo:'',
      calendarInfo:'',
      cardInfo:'',
      gallaryImgs:'',
      recommendInfo:'',
      sightName:'',
      isShow:false
      }
    },
    components:{
      DetBanner,
      DetGallery,
      DetNav,
      DetCard,
      DetRecommend,
      DetCalendar,
      DetComment
    },
    activated(){
      this.getData()
    },
    deactivated(){
    },
    methods:{
      hand(){
        this.isShow = !this.isShow
      },
      async getData(){
        let ever = await getDetail(this.$route.query.id)
        let {bannerImg,calendarInfo,cardInfo,gallaryImgs,recommendInfo,sightName,commentInfo} = ever
        this.bannerImg = bannerImg,
        this.calendarInfo = calendarInfo,
        this.cardInfo = cardInfo,
        this.gallaryImgs = gallaryImgs,
        this.recommendInfo = recommendInfo,
        this.sightName = sightName,
        this.commentInfo = commentInfo
      }
    },
  }
</script>
<style scoped>
</style>