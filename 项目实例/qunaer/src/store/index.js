import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
      letter:'',
      city:JSON.parse(localStorage.getItem('city'))
  },
  mutations:{
      setLetter(state,index){
        state.letter = index
      },
      changeCity(state,name){
        state.city = name
        localStorage.setItem('city',JSON.stringify(name))
      }
  }
})