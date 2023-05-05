<template>
      <tabbar id="tabbar">
        <tabbarItem path ='/home' activeColor = 'pink'>
            <img slot="tabbar_img" src="~assets/img/tabbar/home.svg" alt="">
            <img slot="tabbar_imgA" src="~assets/img/tabbar/home_active.svg" alt="">
            <div slot="tabbar_text">首页</div>
        </tabbarItem>
        <tabbarItem path ='/category' activeColor = 'pink'>
            <img slot="tabbar_img" src="~assets/img/tabbar/category.svg" alt="">
            <img slot="tabbar_imgA" src="~assets/img/tabbar/category_active.svg" alt="">
            <div slot="tabbar_text">分类</div>
        </tabbarItem>
        <tabbarItem path ='/shopCart' activeColor = 'pink'>
            <img slot="tabbar_img" src="~assets/img/tabbar/shopcart.svg" alt="">
            <img slot="tabbar_imgA" src="~assets/img/tabbar/shopcart_active.svg" alt="">
            <div slot="tabbar_text">购物车</div>
        </tabbarItem>
        <tabbarItem path ='/profile' activeColor = 'pink'> 
            <img slot="tabbar_img" src="~assets/img/tabbar/profile.svg" alt="">
            <img slot="tabbar_imgA" src="~assets/img/tabbar/profile_active.svg" alt="">
            <div slot="tabbar_text">我的</div>
        </tabbarItem>
    </tabbar> 
</template>

<script>
import tabbar from "../../common/Tabbar/tabbar.vue";
import tabbarItem from '../../common/Tabbar/tabbar_item.vue';
export default {
    name: 'WorkspaceJsonTabbarItemCon',
    components:{
      tabbar,
      tabbarItem,
    },
    data() {
        return {
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>