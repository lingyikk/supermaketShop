<template>
    <div>
        <Swiper>
            <swiper-item v-for="(item,index) in banner" :key="index" >
                <a :href="item.link">
                    <img :src="item.image"alt="" @load="SwiperTabControlLoad()">  
                </a>
            </swiper-item>
        </Swiper>
    </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    name: 'WorkspaceJsonHomeswiper',

    data() {
        return {
            isLoad:true,
            
        };
    },
    props:{
        banner:{
            type:Array,
            default(){
                return[]
            }
        },
    },
   components:{
       Swiper,
       SwiperItem
   },

    methods: {
        // 图片加载完成只触发一次子传父事件
        SwiperTabControlLoad(){
            if(this.isLoad){
                this.$emit('SwiperTabControlLoad')
                this.isLoad = false
            }
        }    
    },
};
</script>

<style scoped>

</style>