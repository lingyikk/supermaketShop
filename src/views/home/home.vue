<template>
    <div id="home">
        <!-- 头部标题 -->
        <navbar id="navbar">
            <div slot="center" class="navTxt">购物街</div>
        </navbar>

        <tabcontrol ref="tabControlBSOut" @tabControlClick="tabControlClick" 
        class="tabControlBSOut" v-show="isTabControlFlex"></tabcontrol>

        <scroll class="content" ref="Scroll" :ProbeTypeCount=homeProbeType 
        @scrollTopShows="scrollTopShow" :isPullUpLoad=true @pullingUp="loadMore">
        
            <!-- 轮播图 -->
            <swiper :banner=banner class="banner" @SwiperTabControlLoad="SwiperTabControlLoad()"></swiper>

            <!-- 推荐模块 -->
            <home-recommend :recommend=recommend></home-recommend>

            <!-- 本周推荐模块（就是一张图片） -->
            <feature-view></feature-view>

            <!-- tabcontrol 切换栏 -->
            <tabcontrol ref="tabControlBSIn" @tabControlClick="tabControlClick"></tabcontrol>
            <goods-list :goods="goodShow"></goods-list>

        </scroll>
        
        <!--滚动回顶部按钮  -->
        <scrollTop @click.native="scrollTopClick()" v-show="scrollTopIsShow"></scrollTop>

    </div>
</template>

<script>
// 导入组件
import navbar from 'components/common/Navbar/navbar'
import swiper from './ChildComps/homeSwiper'
import homeRecommend from './ChildComps/homeRecommend';
import FeatureView from './ChildComps/FeatureView'
import tabcontrol from 'components/content/tabControl/tabControl'
import goodsList from 'components/content/goods/goodsList'
import scroll from 'components/common/scroll/scroll'
import scrollTop from 'components/content/scrollTop/scrollTop'

// home首页-->网络请求
import {getHomeMultidata, getHomeGoods} from 'network/home'

// 导入js文件
import {debounce} from 'common/debounce';


export default {
    name: 'WorkspaceJsonHome',

    data() {
        return {
            banner:[],
            recommend:[],
            tabControlGoods:{
                pop:{page:0, list:[]},
                new:{page:0, list:[]},
                sell:{page:0, list:[]},
            },
            // 控制切换栏当前哪个按钮被选中
            currentType:'pop',
            // 设置home页面滚动配置
            homeProbeType:3,
            // 默认scrollTop组件不显示
            scrollTopIsShow:false,
            // tabControl组件距离顶部的距离
            tabControlTop:1,
            // 控制滑动距离是否超过tabControl组件距离顶部的距离
            isTabControlFlex:false,
            // 得到离开页面的距顶部距离
            keepY:0,
        }
    },

    mounted(){
        // 完成对加载商品图片的监听，并给频繁调用refresh方法防抖处理
        // debounce已被抽离到common中
        const reDebounce = debounce(this.$refs.Scroll.refresh,200)// debounce(reFun,delay)
        // 通过事件总线来监听商品                                                                                                                                                                                            
        this.$bus.$on('onGoodsImg',()=>{
            // this.$refs.Scroll.refresh
            reDebounce()
            // console.log(this.$refs.Scroll.scroll.scrollerHeight)
        })

        
          

    },

    // 首页组件创建时执行 -->抽离到methods方法中去了
    created(){
        // home组件中请求的首页轮播图、四个推荐如：十点抢券数据传入result
        this.getHomeMultidata()

        // 首页商品信息数据请求
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
0
        // // 通过事件总线来监听商品                                                                                                                                                                                            
        // this.$bus.$on('onGoodsImg',()=>{
        //     this.$refs.Scroll.refresh()
        //     // console.log(this.$refs.Scroll.scroll.scrollerHeight)
        // })

    },

    methods: {
        /* 
            网络请求对数据的处理
        */
        // created中调用的方法
        getHomeMultidata(){
            getHomeMultidata().then(res =>{
            this.banner = res.data.banner.list
            this.recommend = res.data.recommend.list
        }).catch(err =>{
            console.log(err)
        })
        },

        getHomeGoods(type){     
            // page为请求type中第几页的数据，请求成功后才对page增加1的操作。
            let page =  this.tabControlGoods[type].page + 1
            getHomeGoods(type,page).then(res=>{
                //将请求的不同type添加到list中
                this.tabControlGoods[type].list.push(...res.data.list)
                this.tabControlGoods[type].page++
                // console.log(type + this.tabControlGoods[type].page); --> type + page
            })
        },

        /* 
            触发事件的方法
        */
        // 切换栏的点击
         tabControlClick(index){
            // console.log(index);
            switch (index){
                case 0:
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }

            // 控制两个tabControl组件统一
            // tabConitemIndex为tabControl组件内控制点击哪个的索引
            this.$refs.tabControlBSOut.tabConitemIndex = index
            this.$refs.tabControlBSIn.tabConitemIndex = index


        },

        //点击滚回顶部  -->this.$refs.Scroll获取scroll组件对象
        scrollTopClick(){
            this.$refs.Scroll.scrollTop(0,0,500)
        },

        // 监听商品信息组件滚动
        scrollTopShow(position){
            // 控制scrollTop组件显示与隐藏
            this.scrollTopIsShow = -position.y > 1000

            // 控制tabControl组件是否被定位：fixed
            this.isTabControlFlex = this.tabControlTop <= -position.y
        },
        
        // 下拉加载更多 -->数据
        loadMore(){
            // console.log('pullingUp');
            this.getHomeGoods(this.currentType)
            // 允许多次调用pullingUp
            this.$refs.Scroll.finishPullUp()
            // console.log('loadMore');
            // 刷新，重新计算content高度
            // this.$refs.Scroll.scroll.refresh()
        },
       
        // tabcontrol组件吸顶效果
        SwiperTabControlLoad(){
            // this.tabcontrolHeight = this.$refs.tabControl.$el.offsetTop

            // 组件对象中可以通过$el来获取元素对象，-->使用js语法操控元素
            // console.log(this.$refs.tabControl.$el.offsetTop);    
            // tabControl改为-->  tabControlBSIn
            this.tabControlTop = this.$refs.tabControlBSIn.$el.offsetTop
            
        }
    },

    computed:{
        // 传入点击切换栏的商品数据
        goodShow(){
           return this.tabControlGoods[this.currentType].list
        },


    },

    components:{
        navbar,
        swiper,
        homeRecommend,
        FeatureView,
        tabcontrol,
        goodsList,
        scroll,
        scrollTop,
    },

//     activated(){
//         this.$refs.Scroll.scroll.scrollTo(0,-this.keepY,0)
// },

//     deactivated(){
//         this.keepY = -1000
// },
    
}; 
</script>

<style scoped>
    #home{
        position: relative;
        /*vh 是视口高度的单位，1vh 等于浏览器窗口的高度的 1%。
        viewport height
          */
        height: 100vh;
    }

    /* 最顶部的nav */
    .NavBar{
        /* 使用base.css中的 */
       background: var(--color-tint);
    }
   .NavBar .navTxt{
       color: #fff;
    }

    /* 轮播图 */
    /* .banner{
        margin-top: 44px;
    } */
    #navbar{
        position: relative;
        z-index: 9;
        top:0;
    } 

    /* 设置scroll的content -->设置高度高度 */
    .content{
        position: absolute;
        /* height: 1200px; */
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        overflow: hidden;
    }
    
    /* .tabcontrolFlex{
        position: fixed;
        z-index: 9;
        top:44px;
    } */

    /*  */
    .tabControlBSOut{
        position: relative;
        top: 0;
        z-index: 9;
    }
</style>