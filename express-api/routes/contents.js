var express = require('express');
var router = express.Router();

// 引入 content 模块
let contentModel = require("../model/contents")

/* GET home page. */
// 添加博客内容
router.post('/add', function(req, res, next) {
  console.log(req.body)
  let {title, body, support} = req.body
  if(!title || !body || !support || !createTime){
    res.json({
      err: 1,
      msg: '请输入必要参数'
    })
  }
  contentModel.insertMany({title, body, support, createTime}).then(() =>{
    res.json({
      code: 200,
      msg: '博客发布成功'
    })
  })
});

// 删除博客内容
router.delete("/delete", (req, res, next) => {
  let {id} = req.body

  contentModel.deleteOne({_id: id}).then(() =>{
    res.json({
      code: 200,
      msg: "删除成功"
    })
  }).catch(err =>{
    res.json({
      err: 1,
      msg: "删除失败"
    })
    console.log(err)
  })
})

// 数据分页
router.get("/pagination", (req, res, next) => {
  console.log(req.query)
  let {pageNumber, pageStrip} = req.query
  contentModel.find().skip((pageNumber - 1) * pageStrip).limit(pageStrip).then(arr => {
    res.json({
      code: 200,
      msg: '分页数据加载成功',
      data: arr
    })
  })
})


// 模糊查询
router.get("/pagelike", (req, res, next) =>{
  console.log(req.params)
  console.log(req.query)
  let {title} = req.query
  contentModel.find({title: new RegExp(title) }).then(arr => {
    res.json({
      code: 200,
      message: '数据查询成功',
      data: arr
    })
  })
})


module.exports = router;
