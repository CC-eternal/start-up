<template>
  <div class="containers">
    <div class="card">
      <div class="comment">
        <i class="iconfont icon-jiantouyou"></i>
        <div class="color"><span>{{cardInfo.score}}分</span><span>{{cardInfo.desc}}</span></div>
        
        <div class='com-m'>{{cardInfo.comment}}条评论</div>
      </div>
      <div class="intro">景点介绍
        <i class="iconfont icon-jiantouyou"></i>
      </div>
      <div class="site">{{cardInfo.address}}<i class="iconfont icon-jiantouyou"></i></div>
    </div>
    <div class="title">去哪儿推荐</div>
  </div>
</template>
<script>
  export default {
    props:['cardInfo']
  }
</script>
<style lang='stylus' scoped>
    .card
      margin-top:1rem
      padding:.3rem
      .comment
        display:inline-block
        width:50%
        .color
          font-size:.4rem
          color:#FF982C
        .com-m
          font-size:.2rem
          color:#ccc
      .intro
        float:right
        display:inline-block
        width:40%
      .site
        padding:.2rem
        font-size:.3rem
      i 
        float right
    .title
      padding .2rem
      margin-left:.3rem
      font-size .4rem
</style>