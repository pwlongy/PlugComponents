var express = require('express');
var router = express.Router();

// 导入加密文件
let bcryptjs = require('bcryptjs')
let userModel = require("../model/users")
/* GET home page. */

// 引入 获取 Token 插件
let {createToken} = require("../utils/jwt")

// 注册
router.post('/registed', function(req, res, next) {
  let { username, password, avatar} = req.body

  // 查找用户名知否注册过
  userModel.find({username}).then(arr =>{
    console.log(arr)
    if(arr.length > 0){
      res.json({
        code: 400,
        msg: '用户名已存在'
      })
    }else{

      // 将数据写入到mongodb中
      bcryptjs.hash(password, 12, (err, hash) => {
        if(err){
          console.log("err:", err)
        }else{
          // 加密密码
          password = hash
          userModel.insertMany({username, password, avatar}).then(() =>{
            res.json({
              code: 200,
              msg: '注册成功'
            })
          })
        }
      })

    }
  })


  
});

// 登录
router.post("/login",  (req, res, next) =>{
  let {username, password} = req.body

  userModel.find({username}).then(async arr => {
    
    let isok = await bcryptjs.compare(password, arr[0].password)
    if(isok){
      // 获取 token 值 
      let token = createToken(arr[0]._id)

      res.json({
        code: 200,
        msg: '登录成功',
        data: {
          username,
          token
        }
      })
    }else{
      res.json({
        code: 400,
        msg: '用户名或密码错误'
      })
    }
  }).catch(err => {
    res.json({
      code: 400,
      msg: '用户名或密码错误',
      data: err
    })
  })

})

module.exports = router;
