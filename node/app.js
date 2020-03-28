

/*
 * @Description: This is a javascript file
 * @Author: JeanneWu
 * @Date: 2020-03-27 11:14:51
 */
// js文件头部注释之后的内容
var express = require('express');
var app = express();

app.get('/api', function (req, res) {
    console.log("主页 GET 请求");
    res.send('Hello GET');
 })

app.listen(3000, () => {
    console.log('hello');
})