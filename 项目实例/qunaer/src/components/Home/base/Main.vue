<template>
 <div class='container'>
    <div class="title">猜你喜欢</div>
    <ul class="main">
       <li v-for = '(item) in recommendList' :key = 'item.id' class="l-list">
          <div class="img">
              <img :src='item.imgUrl' alt="" @click="getDetail(item.id)">
          </div>
          <div class="content">
             <div class="headline">{{ item.desc }}</div>
             <div class='comment'>
                   <i  v-for="(item,index) in 5" :key='index' class="iconfont icon-star st"></i>
                   <div class="star" :style="item.score|starLog">
                     <i  v-for="(item,index) in 5" :key='index' class="iconfont icon-star" > </i>
                   </div>
                   <p class="p">{{item.comment}}评论数</p>
             </div>
             <div class="cost">￥<span class="intr">{{item.price}}</span>起 <span class="push-right">{{item.title}}</span></div>
          </div>
       </li>
    </ul>
 </div>
</template>
<script>
 export default {
    props:['recommendList'],
    methods:{
       getDetail(value){
         this.$router.push({
            path:'/detail',
            query:{
               id:value
            }
         })
       }
    },
    filters:{
       starLog(value){
          return {width:value*0.32+'rem'}
       }
    }
 }
</script>
<style lang='stylus' scoped>
.container
   padding:.2rem
   .title
      height:.8rem
      background-color:#ddd
      font-size:.4rem
   .main
      margin-top:.1rem
      .l-list
         height 3rem
         vertical-align middle
         .img 
            float:left
            width:30%
            img 
               width:100%
         .content
            margin-left:32%
            padding:.1rem
            .headline
               font-size:.35rem
               height:.7rem
            .comment
               position:relative
               line-height:.6rem
               .st
                  float left 
                  color:#ccc
               .star 
                  display:inline-block
                  position absolute
                  overflow:hidden
                  left:0
                  color:#FFC021
               .p
                  margin-left:3.5rem
            .cost
               line-height:.7rem
               .push-right 
                  float right
               .intr
                  color:#FFC021
                  font-size:.6rem
            .cost::after
               content:''
               display:block
               border-bottom:1px solid #ccc
            
          
</style>