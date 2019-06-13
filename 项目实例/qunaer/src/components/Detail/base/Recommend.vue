<template>
  <div class="recommend">
      <ul>
        <li class="c-list" v-for="(item,index) in recommendInfo" :key='index' >
          <div class="content">
            <div class="name">{{item.title}}</div>
            <div class="date">{{item.time}}</div>
            <div></div>
          </div>
          <div class="b-right">
            <div class="money">{{item.price}}</div>
            <div class="btn">{{item.type}}</div>
          </div>
        </li>
      </ul>
  </div>
</template>
<script>
  export default {
    props:['recommendInfo']
  }
</script>
<style lang='stylus' scoped>
  .recommend

    padding:.2rem 0
    .c-list
      margin:.1rem 0
      .content  
        display:inline-block
        width:70%
        .name
          font-size:.3rem
          line-height:.4rem
        .date
          font-size:.2rem
          line-height:.4rem
      .b-right
        float:right
        width:15%
        text-align center
        .money
          font-size:.4rem
          color:#FF9903
          text-align:center
        .btn
          width:1.2rem
          height:.8rem
          background-color:#FF9903
          border:1px solid #fff999
          text-align:center
          line-height:.8rem
          color:white

      
      
</style>