<template>
    <div ref="detail" id="detail">
        <dNavbar></dNavbar>

        <scroll class="content" ref="scroll"
        :isPullUpLoad=true :ProbeTypeCount=3 >

        <!-- navbar导航栏 -->
        <!-- 轮播图 -->
        <dSwiper :topImages=topImages></dSwiper>

        <!-- 基础商品信息 -->
        <dBaseInfo :dBaseInfo=dBaseInfo></dBaseInfo>

        <!-- 商店信息 -->
        <detail-shop-info :shop=dShopInfo></detail-shop-info>
        
        <!-- 商品图片 -->
        <detail-goods-info :detailInfo=detailInfo  @imageLoad="imageLoad"></detail-goods-info>

        <!-- 商品参数 -->
        <detail-param-info :paramInfo=dparamInfo></detail-param-info>

        <!-- <div>{{detailId}}</div> -->
       
        </scroll>
    </div>
</template>

<script>
// 引入组件
import dNavbar from './detailChild/dNavbar'
import dSwiper from './detailChild/dSwiper'
import dBaseInfo from './detailChild/dBaseInfo'
import DetailShopInfo from './detailChild/DetailShopInfo'
import DetailParamInfo from './detailChild/DetailParamInfo'
import DetailGoodsInfo from './detailChild/DetailGoodsInfo'

import scroll from 'components/common/scroll/scroll'

// 网络请求的js文件
import {dBaseInfoDate, Shop, GoodsParam} from 'network/detail'

// 请求数据
import {getDetail} from 'network/detail'


export default {
    name: 'WorkspaceJsonDetail',

    data() {
        return {
            //当前商品信息的iid
            detailId:null,
            // 轮播图数据
            topImages:null,
            // 基础商品信息
            dBaseInfo:{},
            // 商店信息
            dShopInfo:{},
            // 商品图片及部分文字
            detailInfo:{},
            // 商品参数
            dparamInfo:{},

        };
    },

    created(){
        // 获得当前商品信息的iid
        this.detailId = this.$route.params.iid
        
       /* 网络请求数据 */
        getDetail(this.detailId).then(res =>{
            console.log(res.result);
            // 轮播图
            this.topImages = res.result.itemInfo.topImages
            // 基础商品信息
            this.dBaseInfo = 
            new dBaseInfoDate(res.result.columns,res.result.shopInfo.services,res.result.itemInfo)
            // 商店信息
            this.dShopInfo = new Shop(res.result.shopInfo)
            // 商品图片及部分文字
            this.detailInfo = res.result.detailInfo;
            // 商品参数
            this.dparamInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule)

        }).catch(err=>{
            console.log(err);
        })
        

        // 临时使用延迟来对滚动的内容进行刷新。             ----->之后再处理
        // setTimeout(() => {
        //     this.$refs.scroll.refresh()
        // }, 800);
        
    },

    mounted() {
        
    },

    methods: {
       imageLoad() {
        this.$refs.scroll.refresh()
      }
    },
    
    components:{
        dNavbar,
        dSwiper,
        dBaseInfo,
        DetailShopInfo,
        scroll,
        DetailParamInfo,
        DetailGoodsInfo,

    }
    
};
</script>

<style scoped>
/* 使tabbar看不到 --> detail覆盖tabbar*/
#detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}

/* 设置scroll的高度 */
.content{
    position: absolute;
    /* height: 1200px; */
    top: 44px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
}
</style>