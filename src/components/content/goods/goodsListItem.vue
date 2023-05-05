<template>
    <div class="goodsListItem" @click="clickItem">
      <!-- 通过事件总线来监听组件加载每一张图片 -->
        <img :src="goodsListItems.show.img" alt="" class="goodsImg" 
        @load="onGoodsImg">
        <div class="goodsInfo">
            <p>{{goodsListItems.title}}</p>
            <span class="goodsPrice">{{goodsListItems.price}}</span>
            <span class="goodsCollect">{{goodsListItems.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonGoodslistitem',

    data() {
        return {
            
        };
    },

    props:{
        goodsListItems:{
            type:Object,
            default(){
                return {}
            }
        }
    },

    methods: {
      // 加载图片
        onGoodsImg(){
          // console.log(123);
          this.$bus.$emit('onGoodsImg')
        },
      
      // 点击商品
      clickItem(){
        this.$router.push('/detail'+this.goodsListItems.iid)
      }
    },
};
</script>

<style scoped>

.goodsListItem {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

.goodsListItem .goodsImg {
    width: 100%;
    border-radius: 5px;
  }

.goodsListItem  .goodsInfo{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

.goodsListItem  .goodsInfo p {
    /* 下面三个属性都是将文字超出的部分转为省略号 */
    overflow: hidden;
    /* 超出部分为省略号 */
    text-overflow: ellipsis;
    /* 用于指定元素内的文本不换行。 */
    white-space: nowrap;
    margin-bottom: 3px;
  }

.goodsListItem .goodsInfo .goodsPrice {
    color: var(--color-high-text);
    margin-right: 20px;
  }

.goodsListItem  .goodsInfo .goodsCollect {
    position: relative;
  }

.goodsListItem  .goodsInfo .goodsCollect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>