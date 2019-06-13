<template>
  <div class="cal">
    <div class="check">
        <div class="d" @click= 'handTick' ref='t'>门票</div>
        <div class="d" @click='handSun' ref='s'>一日游</div>
    </div>
    <div class="list" v-for="(item,index) in calendarInfo" :key="index" ref="ever">
      <div class="title">{{item.calendarInfo.title}}</div>
      <div class="items" v-for="(value,num) in item.calendarInfo.result" :key="num"  @click='start(value)' >
        <div class="p-name">{{ value.subtitle}}</div>
          <div class="p-right">￥{{value.price}}<i class="iconfont icon-jiantouxiangxia"  style='transform:rotate(180deg)'></i></div>
          <det-recommend :recommendInfo = value.recommendInfo v-show='value.isShow'></det-recommend>
        </div>
    </div>
  </div>
</template>
<script>
import DetRecommend from '@/components/Detail/base/Recommend'
  export default {
    props:['calendarInfo'],
    data(){
      return {
        isShow:false,
        botomStyle:{
          tick:'border-bottom:',
          handSun:''
        }
      }
    },
    methods:{
      start(value){
        value.isShow = !value.isShow
        value.styleObj.transfrom = 'rotate('+value.isShow*180+'deg)'
      },
      handTick(){
        document.documentElement.scrollTop = this.$refs.ever[0].offsetTop-90;
        this.$refs.t.style.borderBottom = '1px solid red';
        this.$refs.s.style.borderBottom = ''
      },
      handSun(){
        document.documentElement.scrollTop = this.$refs.ever[2].offsetTop-50
        this.$refs.s.style.borderBottom = '1px solid red';
        this.$refs.t.style.borderBottom = ''
        
      }
    },
    components:{
      DetRecommend
    }
  }
</script>
<style lang='stylus' scoped>
  .cal
    padding 0.2rem 0
    .check
      display flex  
      justify-content space-around
      line-height 1rem
      font-size 0.35rem
      background-color:#eee
      .d
        width:20%    
        text-align:center
    .list
      margin:.3rem 0
      padding:.1rem
      .title
        font-size:.35rem
        padding:.4rem
      .items
        line-height:.5rem
        padding:.2rem
        .p-name
          display:inline-block
          width:69%
        .p-right
          float:right
          width:15%
          font-size:.3rem
          color:#FF9903
          .icon-jiantouxiangxia
            color:#ccc
</style>