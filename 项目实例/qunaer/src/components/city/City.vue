<template>
  <div>
      <city-header></city-header>
      <city-suo :cities='cities'></city-suo>
      <city-list :hotCities='hotCities' :cities='cities'></city-list>
      <city-side :cities='cities'></city-side>
  </div>
</template>
<script>
import {getCity} from '@/api'

import CityHeader from './base/CityHeader'
import CitySuo from './base/Suo'
import CityList from './base/List'
import CitySide from './base/Side'
  export default {
    data(){
      return {
        cities:[],
        hotCities:[]
      }
    },
    components:{
      CityHeader,
      CitySuo,
      CityList,
      CitySide,
    },
    methods:{
       async getData(){
          let {cities,hotCities} = await getCity().then( value=>{
  
            return value
          })
          this.cities = cities
          this.hotCities = hotCities
      }
    },
    created(){
      this.getData()
    }
    
  }

</script>
<style scoped>
</style>