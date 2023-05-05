<template>
    <div>
        <navbar>
            <div slot="left" class="back" @click="back()">
                <img src="~assets/img/common/back.svg" alt="">
            </div>

            <div slot="center" class="dNCenter">
                <div class="dCenter"
                v-for="(navbarDate,index) in navbarDate" 
                @click="navClick(index)" :class="{active: isNavActive === index}">
                {{navbarDate}}</div>
                
            </div>
        </navbar>
    </div>
</template>

<script>
import navbar from 'components/common/Navbar/navbar.vue'

export default {
    name: 'WorkspaceJsonDnavbar',

    data() {
        return {
            navbarDate:['商品','参数','评论','推荐'],
            // 记录点击navbar的索引
            isNavActive:0,
            
            
        };
    },

    mounted() {
        
    },
 
    methods: {
        // 点击navbar的索引替换isNavActive
        navClick(index){
            this.isNavActive = index
        },

        // 返回上一页
        back(){
            this.$router.back()
        }
    },

    components:{
        navbar,
    },

    computed:{
       
    }
};
</script>

<style scoped>
/* 页面样式 */
.back{
    position: relative;    
}
.back>img{
    position: absolute;
    left:0;
    transform: translate(50%,50%);
    width: 30px;
    height: 22px; 
}

.dNCenter{
    display: flex;
    width: 100%;
}
.dCenter{
    flex: 1;
}

/* navbar点击 */
.active{
    color:var(--color-high-text);
}
</style>