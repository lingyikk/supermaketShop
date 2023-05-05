// 导入axios
import axios from 'axios'
export function request(config) {
    return new Promise((resolve, reject) => {
        const request1 = axios.create({
            baseURL: 'http://123.207.32.32:7888/api/hy66/',
            timeout: 10000
        })

        // use()中需要传入两个参数为函数类型，
        //1、 请求拦截器 config为发生请求的数据
        request1.interceptors.request.use(config => {
            console.log('请求成功');
            // console.log(config);
            return config
        }, err => {
            console.log(err);
        })

        // 2、响应拦截
        request1.interceptors.response
            .use(res => {
                return res.data
            }, err => {
                console.log(err);
            })


        request1(config).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err);
            })
            // return request1(config)
    })
}