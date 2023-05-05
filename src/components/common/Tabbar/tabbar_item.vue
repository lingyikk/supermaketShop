<template>
    <div class="tabbar_item" @click="itemClick()">
        <!-- 一般在slot上使用vue的语法的时候，需要被div包裹并在div上进行vue的操作
        因为slot会被替换，而div会包裹替换的slot内容 -->
        <div v-if="isActive">
            <slot name="tabbar_img"></slot> 
        </div>
        <div v-else>
            <slot name="tabbar_imgA"></slot>
        </div>
        <div :style="activeText">
            <slot name="tabbar_text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonTabbarItem',
    data() {
        return {

        }
    },

    props:{
        path: String,
        activeColor:{
            type:String,
            default:'red'
        }
    },

    computed:{
        // 控制图表
        isActive(){
            // this.path是通过props获得的父组件path，
            // this.$route.path是当前路由处于活跃状态的path
            // indexOf:当匹配不到的时候
            // console.log(this.$route.path.indexOf(this.path) == -1);
            return this.$route.path.indexOf(this.path) == -1
        },
        // 控制文字颜色
        activeText(){
          return  !this.isActive ? {color:this.activeColor} :{}
        }
    },

    mounted() {                                                                   
       
    },

    methods: {
        itemClick() {
            this.$router.replace(this.path)
        }
    },
};
</script>

<style scoped>
#tabbar .tabbar_item{ 
  flex: 1;
  text-align: center; 
  /* tabbar在移动端高度一般是49px */
  height: 49px;
  font-size: 14px;
}
#tabbar .tabbar_item img{
    margin-top: 5px;
    width: 25px;
    vertical-align: middle;
}    
</style>