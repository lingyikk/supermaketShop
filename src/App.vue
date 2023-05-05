<template>
  <div id="app">
    <!-- 匹配优先考虑组件中的name属性值，再去考虑component中注册的组件名 -->
    <keep-alive exclude="WorkspaceJsonDetail">
      <router-view></router-view>
    </keep-alive>
    <MainTabbar></MainTabbar>
  </div>
</template>

<script>
import MainTabbar from 'components/content/main/tabbar_item_con.vue' 

export default {
  name: 'WorkspaceJsonApp',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
  components:{
    MainTabbar
  }
};
</script>
<style>
/* 引入css */
  @import 'assets/css/base.css';
</style>
