var express = require('express')
var router = express.Router()
// 路径都是基于这个模块的
router.get('/',function (req , res) {
    res.json({
        name : '胡八一'
    })
})
module.exports = router
// 模块路由
// /users   /books  /movies