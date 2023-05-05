<template>
        <!-- Object.keys(this.dBaseInfo).length为dBaseInfo数据对象的长度 -->
    <div class="dBaseInfo" v-if="Object.keys(dBaseInfo).length !== 0" > 
        <p>{{dBaseInfo.title}}</p> 

        <div class="price">
            <span>{{dBaseInfo.newPrice}}</span>
            <span>{{dBaseInfo.lowNowPrice}}</span>
            <span>{{dBaseInfo.discount}}</span>
        </div>

        <div class="countInfo">
            <span v-for="(columns,index) in dBaseInfo.columns" v-if="index<=1">{{columns}}</span>
            <span v-for="(services,index) in dBaseInfo.services" v-if="index == 3" >{{services.name}}</span>
        </div>

        <!-- for循环中取得索引的前三位，最后一位不需要，可通过v-if对索引判断来实现 -->
        <div class="info-service">
            <span v-for="(services_item,index) in dBaseInfo.services"
             v-if="index<=2" class="info-service-item">
                <img :src="services_item.icon" alt="">
                <span>{{services_item.name}}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonDbasetop',

    props:{
        dBaseInfo:{
            type:Object,
            default(){
                return {}
            }
        },
    },

    data() {
        return {
            
        }
    },

    created(){

    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.dBaseInfo{
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
}

.dBaseInfo  p{
    color: #222;
}
.price{    
    margin-top: 10px;
}

.price span:nth-child(1){
    font-size: 24px;
    color: var(--color-high-text);
}
.price span:nth-child(2){
    font-size: 13px;
    margin-left: 5px;
    /* 删除线 */
    text-decoration: line-through;
}
.price span:nth-child(3){
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;
    position: relative;
    top: -8px;
}
.countInfo{
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
}

  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .info-service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .info-service-item span {
    font-size: 13px;
    color: #333;
  }
</style>