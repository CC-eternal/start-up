<template><div>
  <div class="container">
    <div class="suo">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="输入城市名称或字母" v-model='cityName'>
    </div> 
    <div class='call'>取消</div>
  </div>
    <div class="select" v-if='cityName' >
      <ul>
        <li v-for='city in filterCities' :key = 'city.id' class="s-list" @click='fn(city.name)'>{{city.name}}</li>
        <li v-if='filterCities.length==0' class="s-list">未匹配到数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import {getCity} from '@/api'
  export default {
    props:['cities'],
    data(){
      return {
        cityName:''
      }
    },
    methods:{
      fn(name){
        this.$store.state.city = name
        this.$router.push({
          path:'/'
        })
      }
    },
    computed:{
      filterCities(){
        const result = []

        for(let key in this.cities){
          this.cities[key].forEach((value,index)=>{
              if(value.name.includes(this.cityName)||value.spell.includes(this.cityName)){
                return result.push(value)
              }
          });
        }
        return result
      }
    },
   }
</script>
<style lang='stylus' scoped>
.container
  display:flex
  padding:.2rem
  background-color:#00BCD4
  font-size:.2rem
.suo
  display:flex
  width:80%
  padding: .1rem
  background-color white
  border-radius: .4rem
  color:#eee
  i 
    margin-left: .2rem
  input 
    display:block
    margin:auto
    width:80%
.call
  font-size 0.4rem
  margin:auto
  color:#aaa
.select 
  position fixed
  overflow hidden
  top:1.8rem
  right:0
  left:0
  bottom:0
  text-align:center
  font-size
  ul
    overflow-y:auto
    width:100%
    height:100%
    background-color:white
  .s-list
    border:1px solid #eee
    padding:.1rem
</style>