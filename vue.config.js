module.exports = {
    configureWebpack: {
        resolve: {
            // 起别名-->省略‘././’的路径
            alias: {
                // 默认已经有了'@' :resolve（'src'）
                'assets': '@/assets',
                'network': '@/network',
                'common': '@/common',
                'components': '@/components',
                'views': '@/views',
            }
        },
    },
    lintOnSave: false,

    // 引用swiper的配置
    devServer: {
        host: '0.0.0.0',
        // https:true,
        port: 6103,
        client: {
            webSocketURL: 'ws://0.0.0.0:6103/ws',
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },

}