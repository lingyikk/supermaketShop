import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 懒加载组件
const home = () =>
    import ('../views/home/home')
const category = () =>
    import ('../views/category/category')
const shopCart = () =>
    import ('../views/shopCart/shopcart')
const profile = () =>
    import ('../views/profile/profile')
const detail = () =>
    import ('../views/detail/detail')

// router映射
const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    component: home
}, {
    path: '/category',
    component: category
}, {
    path: '/shopCart',
    component: shopCart
}, {
    path: '/profile',
    component: profile
}, {
    path: '/detail:iid',
    component: detail
}]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router