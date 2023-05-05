<template>
    <div class="recommends">
        <div v-for="ReItem in recommend" class="ReItems">
            <a :href="ReItem.link">
                <img :src="ReItem.image" alt="">
                <div>{{ReItem.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonHomerecommend',

    data() {
        return {
            
        };
    },
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
        
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style  scoped>
.recommends{
    display: flex;
    width: 100%;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 25px;
    border-bottom:10px solid #eee;

}
.recommends .ReItems{
    flex: 1;
}
.recommends .ReItems img{
    width:70px;
    height:70px;
    margin-bottom: 10px;
}

</style>