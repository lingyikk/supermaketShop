<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
           <slot></slot>
        </div>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
    name: 'WorkspaceJsonScroll',

    data() {
        return {
            scroll:null
        };
    },   
    
    props:{
        ProbeTypeCount:{
            type:Number,
            default(){
                return []
            }
        },

        isPullUpLoad:{
            type:Boolean,
            default(){
                return false
            }
        }
    },
    
 

    mounted() {
      this.$nextTick(() => {

            //推荐的获取元素对象方式：this.$refs.wrappers，scroll为bs对象
            this.scroll = new BetterScroll(this.$refs.wrapper, {
                probeType:this.ProbeTypeCount,
                pullUpLoad:this.isPullUpLoad,
                click:true,
            })

            //监听滑动位置 
            this.scroll.on('scroll',(position) =>{
               this.$emit('scrollTopShows', position);
            })

            // 监听上拉加载更多
            this.scroll.on('pullingUp', ()=>{
                this.$emit('pullingUp');
            
                // console.log('监听到了上拉加载更多');
                // console.log(this.isPullUpLoad instanceof Boolean);
                //finishPullUp()方法：允许多次调用pullingUp，默认只能调用一次回调函数
                // this.scroll.finishPullUp()  //结束上拉加载行为，准备下次...
            })

      })
    },

    methods: {
        // 点击滚回顶部
        scrollTop(x,y,timeout){
            this.scroll && this.scroll.scrollTo(x,y,timeout)
        },

        //允许多次调用pullingUp (结束上拉加载行为，准备下次调用pullingUp)
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        },

        // 每加载一个商品的图片就会触发滚动的刷新
        refresh(){
            console.log('refresh');
            this.scroll &&  this.scroll.refresh()
        }
    },
   
}
</script>

<style  scoped>

</style>