var express = require('express')
var router = express.Router()
// 路径都是基于这个模块的
router.get('/', function(req, res) {
    //数据库查询 promise json (未实现)
    res.render('index', {
        name:'大表哥'
    })
})

module.exports = router
// 模块路由
// /users   /books  /movies
