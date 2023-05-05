<template>
    <div class="tabcon">
        <div v-for="(tabcon_item,index) in title" 
        class="tabcon_item" 
        :class="{active:index === tabConitemIndex}"
        @click="tabconClick(index)" >
            <span class="tabcon_text">{{tabcon_item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonTabcontrol',

    data() {
        return {
            tabConitemIndex:0,
            title:['流行','新款','精选']
        };
    },

    methods: {
    // 点击哪个就将当前的index拿到，告诉控制active的tabConitemIndex
        tabconClick(index){
            this.tabConitemIndex = index
            this.$emit('tabControlClick', index);
        }
    },
};
</script>

<style scoped>
.tabcon{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background: #fff;
}
.tabcon .tabcon_item{
    flex:1;
}
.active{
    color:var(--color-high-text);
}
.active>.tabcon_text{
    padding: 4px;
    border-bottom: 2px solid var(--color-high-text);
}
</style>