const express = require('express');
const ejs = require("ejs")

//引入各方路由
const admin = require("./routes/admin")
const index = require("./routes/index")
const api = require("./routes/api")

var app = express();

//配置模板引擎
app.set('html', ejs.__express);
app.set('view engine', 'html');

app.use(express.static("static"));

//获取post提交的数据
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//后台
app.use('/admin', admin);
//api接口
app.use('/api', api);
//前台
app.use("/",index)

app.listen(3000)

module.exports = app;
