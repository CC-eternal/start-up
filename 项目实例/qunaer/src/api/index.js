import axios  from 'axios'

//专门管理前台和后台的数据接口

//设置传出的方式
axios.interceptors.response.use(function (response) {
  return response.data.data;
})

//请求home组件的数据接口
export let getHome = ()=>{
  return axios.get('/static/mork/index.json')
}

//请求城市的数据接口
export let getCity = ()=>{
  return axios.get('/static/mork/city.json')
}

//请求详细页的数据接口
export let getDetail = (id)=>{
  return axios.get('/static/mork/detail/'+id+'.json')
}

//请求week页的数据接口
export let getWeek = (id)=>{
  return axios.get('/static/mork/week/'+id+'.json')
}