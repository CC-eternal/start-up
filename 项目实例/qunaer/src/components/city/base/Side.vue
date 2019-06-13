<template>
  <div class="container">
    <div v-for="(item,index) in cities" :key="index" @click='handleClick(index)'>{{index}}</div>
  </div>
</template>
<script>
  export default {
    props:['cities'],
    data(){
      return {
        letter:''
      }
    },
    methods:{
      handleClick(index){
        this.$store.commit('setLetter',index)
        this.letter = this.$store.state.letter
      }
    },
    // computed:{
    //   letter(){
    //     return this.$store.state.letter
    //   }
    // },
    watch:{
      letter(value){
          // console.log(value)
      }
    }
  }
</script>
<style lang='stylus' scoped>
.container
  display:flex
  flex-direction :column
  justify-content  center
  position:fixed
  top:0
  bottom:0
  right:0
  margin:auto
  line-height:.45rem
  width  0.4rem
  font-size 0.3rem
  color:yellowgreen
  
</style>