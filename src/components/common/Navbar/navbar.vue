<template>
    <div class="NavBar">
        <div class="Left"><slot name="left" ></slot></div>
        <div class="Center"><slot name="center"></slot></div>
        <div class="Right"><slot name="right" ></slot></div>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonNavbar',

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
    .NavBar{
        display: flex;
        /* flex:1; */
        text-align: center;
        width: 100%;
        height: 44px;
        line-height: 44px;
    }
    .NavBar .Left,.Right{
        width: 60px;
    }
    .NavBar .Center{
        display: flex;
        flex:1;
        justify-content: center;
    }
</style>