//全局安装webpack    cnpm install -g webpack
//webpack  自动生成dist文件夹和build.js 文件
// yarn add babel-loader babel-core
// yarn add babel-preset-env
// yarn add vue-loader
// yarn add vue
// yarn add webpack-dev-server
// yarn global add webpack-dev-server 全局安装
// webpack-dev-server --open --hot 启动

var path = require('path')
var webpack = require('webpack')

// webpack  配置文件 打包器将一切前端任务打包
// 插件化 启动服务器
module.exports = {
    entry:'./src/main.js', //单点入口
    output: { //出口
        path : path.resolve(__dirname,'./dist'),
        publicPath:'/dist/',
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                //一个组件一个文件
                test:/\.vue$/,
                loader:'vue-loader',
            },
            {
               test:/\.(png|jpg|gif|svg)$/,
               loader:'file-loader',
               options: {
                   name:'[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
}