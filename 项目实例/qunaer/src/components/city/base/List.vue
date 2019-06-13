<template>
  <div class="container" ref='wrapper'>
    <div>
     <div class="title">当前城市</div>
      <div class='contents'><div class="item">{{city}}</div></div>
      <div class="title" >热门城市</div>
      <ul class="r-list">
        <li class="contents">
          <div v-for='item in hotCities' :key='item.id' class="item" @click='fn(item.name)'>
            {{item.name}}
          </div>
        </li>
      </ul>
      <div class="citys" v-for="(value,index) in cities" :key=index>
        <div class="title" :ref='index'>{{index}}</div>
        <ul >
          <li v-for='(item) in value' :key=item.id class="c-item" @click= 'fn(item.name)'>
            {{item.name}}
          </li>
        </ul>
      </div> 
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
  export default {
    props:['hotCities','cities',],
    data(){
      return{
        // letter:this.$store.state.letter
      }
    },
    mounted(){
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true//betterScroll默认阻止了点击事件
    })
    },
    computed:{
      letter(){
        return this.$store.state.letter
      },
      city(){
        return this.$store.state.city
      }
    },
    methods:{
      fn(name){
        this.$store.commit('changeCity',name)
        this.$router.push({
          path:'/'
        })
      }
    },
    watch:{
      letter(index){
        //  let code = index.charCodeAt(0)-'A'.charCodeAt(0)
        this.scroll.scrollToElement(this.$refs[index][0])
      }
    }
  }
</script>
<style lang='stylus' scoped>
  .container
    position fixed
    top:1.8rem
    right:0
    left:0
    bottom:0
    z-index:-10
    .title
      padding:.3rem
      background-color:#eee
    .contents
       display:flex
       height:1.6rem
       flex-wrap:wrap
       justify-content:space-between
       align-content :space-between
       padding:.3rem
      .item
        display:inline-block 
        width:25%
        padding:.2rem
        border:1px solid #ccc
        text-align center
        font-size:.3rem
  .c-item
    font size 0.3rem
    padding 0.2rem
    border:1px solid #eeeeee   
        
      
    
</style>