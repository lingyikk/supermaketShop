<template>
    <div class="goodsList">
        <goods-list-item v-for="goodsListItem in goods" :goodsListItems = goodsListItem />
        <!-- {{goods[0].price}} -->
    </div>
</template>

<script>
import goodsListItem from './goodsListItem';

export default {
    name: 'WorkspaceJsonGoodslist',

    data() {
        return {
            
        };
    },

    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },

    methods: {
        
    },

    components:{
        goodsListItem,
    },
};
</script>

<style scoped>
    .goodsList{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 1%;
    }
</style>