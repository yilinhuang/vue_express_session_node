var path = require('path')
var express = require('express')
var indexRouter = require('./routes/index')
var userRouter = require('./routes/users')
var app = express()


app.set('views',path.join(__dirname,"views"))
app.set("view engine",'ejs')
// 应用级别的路由设置
// requset 请求   response 返回对象
// next 对象 将中间件向下传递 error 对象
// 中间件middleware处理函数
// express 是基于中间件的 web server 
// 串联方式，来提供服务
// app.get('/',function (req,res) {
//     //发送内容 ， 中止中间件传递
//     res.send('hello,express')
// })
// app.get('/api',function (req,res) {
//     res.json(
//         {
//             username:'大表哥'
//         }
//     )
// })
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-with, X_Requested_With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header('X-Powered-By', '3.2.1');
    res.header('Content-Type', 'application/json; charset=utf-8');

    if (req.method === 'OPTIONS') {
        res.end('options ok');
    } else {
        next();
    }
});

app.use('/', indexRouter)
app.use('/users', userRouter)
module.exports = app