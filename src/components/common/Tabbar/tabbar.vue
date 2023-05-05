<template>
    <div id="tabbar">
       <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonTabbar',
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

<style  scoped>
#tabbar{
  display:flex;  
  background: rgb(221, 221, 221);
  /* 导航键底部的排列方式，必须加上left和right，可以保证宽度是占据整个屏幕的宽度
  否则div里的内容会记载一起的问题 */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -2px 3px rgba(177, 177, 177, 0.4);
}


</style>