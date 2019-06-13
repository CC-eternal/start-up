<template>
    <div>
            <home-head></home-head>
            <div ref='wrapper' class="containers">
                <div>
                    <home-roll :swiperList = 'swiperList'></home-roll>
                    <home-nav :iconList = 'iconList'></home-nav>
                    <home-main :recommendList = 'recommendList'></home-main>
                    <home-week :weekendList = 'weekendList'></home-week>
                    <router-view></router-view>
                </div>
            </div>
    </div>
</template>
<script>
    import {getHome} from '@/api'
    import BScroll from 'better-scroll'
    import HomeHead from '@/components/Home/base/Head'
    import HomeRoll from '@/components/Home/base/Roll'
    import HomeNav from '@/components/Home/base/Nav'
    import HomeMain from '@/components/Home/base/Main'
    import HomeWeek from '@/components/Home/base/weeb'
    export default {
       components:{
            HomeHead,
            HomeRoll,
            HomeNav,
            HomeMain,
            HomeWeek
        },
        data(){
            return{
                iconList:[],
                recommendList:[],
                swiperList:[],
                weekendList:[]
            }
        },
        activated(){
            this.getData()
        },
        methods:{
           async getData(){
                 let {iconList,recommendList,swiperList,weekendList} = await getHome().then(res=>{
                     return  res
                 })
                 this.iconList = iconList;
                 this.recommendList = recommendList;
                 this.swiperList = swiperList;
                 this.weekendList = weekendList;
                 
            },

            
        },
        mounted(){
            this.scroll = new BScroll(this.$refs.wrapper,{
                click:true
            })
        }
    }
</script>
<style lang='stylus' scoped>
.containers
    position: fixed
    top:.8rem
    right:0
    left:0
    bottom:0
    z-index: -10

</style>