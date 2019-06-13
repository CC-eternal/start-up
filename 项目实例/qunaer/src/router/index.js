import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import City from '@/components/city/City'
import Detail from '@/components/Detail/Detail'
import Week from '@/components/Home/base/Week'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path:'/city',
      component:City
    },
    {
      path:'/detail',
      component:Detail
    },
    {
      path:'/week/:id',name:'weeklink',component:Week
    }
  ]
})
