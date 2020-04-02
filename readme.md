# 基于vue + webpack的chrome插件

### 该项目是在汇丰银行的指导下完成

# 特点

* 单页面应用
* 支持打包js,vue,css,各类静态资源
* 热更新，后台启动服务器，减少刷新的时间成本，增加开发效率。

# 目录结构

``` bash
├── __dirname                   
│   └── dist                    打包后的文件
│       └── main.js
├── dist
│   └── main.js
├── index.html                  首页
├── package-lock.json
├── package.json                
├── readme.md                   readme的markdown文件
├── src                         源文件
│   ├── app.vue
│   └── main.js
└── webpack.config.js           webpack配置文件
``` 

# npm 相关命令

``` bash
# 安装工程依赖
npm install

# 开启打包, 启动本地server
npm run dev 

```
# 展示
![](demo1.gif)
# Reference: 
https://webpack.docschina.org/concepts/