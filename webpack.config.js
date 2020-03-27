/*
 * @Description: This is a webpack config file
 * @Author: JeanneWu
 * @Date: 2020-03-17 11:28:09
 */
// js文件头部注释之后的内容
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// const proxy = require('http-proxy-middleware');
const vueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

const moduleConfig = env => {
    // Use env.<YOUR VARIABLE> here:
    console.log('NODE_ENV: ', env.NODE_ENV) // 'production' 根据此处判断环境
    console.log('Production: ', env.production) // ture
    return {
        entry: "./src/main.js",
        output: {
            filename: 'main.js',
            path: path.resolve('__dirname', 'dist')
        },
        module: {
            rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.less$/,
                    use: [{
                        loader: 'style-loader' // creates style nodes from JS strings
                    }, {
                        loader: 'css-loader' // translates CSS into CommonJS
                    }, {
                        loader: 'less-loader' // compiles Less to CSS
                    }]
                },
                {
                    test: /\.(gif|jpg|jpeg|svg)/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name].[hash:6].[ext]'
                        }
                    }, ]
                }
            ]

        },
        plugins: [
            new htmlWebpackPlugin({
                title: 'Fintech Categories',
                meta: {
                    viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
                    renderer: 'webkit'
                }
            }),
            new vueLoaderPlugin()
        ]
    }
}
const devConfigFun = (argument) => {
    argument.devtool = '#cheap-module-eval-source-map';
    argument.devServer = {

        port: '8000',
        host: '0.0.0.0',
        overlay: {
            errors: true
        },
        open: true,
        hot: true,
        progress: true, //显示打包的进度
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                secure: false,
            }
        }
    }
    argument.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
    return argument;
}

module.exports = env => {
    let config = moduleConfig(env)
    if (env.NODE_ENV === 'development') {
        config = devConfigFun(config)
    }
    return config
}