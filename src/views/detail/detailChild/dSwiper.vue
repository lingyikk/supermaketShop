<template>
    <swiper class="dSwiper">
        <swiper-item v-for="Images in topImages" >
            <img :src="Images" alt="" >
        </swiper-item>
    </swiper>
        
</template>

<script>
import {Swiper, SwiperItem } from 'components/common/swiper'

export default {
    name: 'WorkspaceJsonDswiper',

    components:{
        Swiper,
        SwiperItem,
    },

    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    },

    data() {
        return {
            
        }
    },

    mounted() {
        
    },

    methods: {
        
    },

   

    
};
</script>

<style scoped>
.dSwiper{
    height: 300px;
    overflow: hidden;
}

</style>