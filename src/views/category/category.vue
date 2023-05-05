<template>
    <div class="wrapper" ref="wrappers">
        <ul class="content">
            <li>1232</li>
            <li>123</li>
            <li>1223</li>
            <li>123213</li>
            <li>123</li>
            <li>123213</li>
            <li>132123</li>
            <li>123</li>
            <li>1233213</li>
            <li>123</li>
            <li>1233</li>
            <li>123</li>
            <li>1233213</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>1323213</li>
            <li>123</li>
            <li>12333</li>
            <li>123213</li>
            <li>12332133</li>
            <li>123</li>
            <li>123</li>
            <li>1233</li>
            <li>1233</li>
            <li>1233</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>1231</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
            <li>123</li>
        </ul>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'


export default {
    name: 'WorkspaceJsonCategory',

    data() {
        return {
            scroll:null,
        };
    },


    methods: {
        
    },

    mounted() {
      this.$nextTick(() => {
        this.scroll = new BetterScroll(this.$refs.wrappers, {
            probeType:3,
            pullUpLoad:true,
            click:true,
        })

        //监听滑动位置 
        this.scroll.on('scroll',(position) =>{
        //   console.log(position)
        })

        // 监听上拉加载更多
        this.scroll.on('pullingUp', ()=>{
            console.log('监听到了上拉加载更多');
            //finishPullUp()方法：允许多次调用pullingUp，默认只能调用一次回调函数
            this.scroll.finishPullUp()  //结束上拉加载行为，准备下次...
        })
      })
    }
    
};
</script>

<style scoped>
    .wrapper{
        height: 150px;
        background: pink;
        overflow: hidden;
    }
</style>