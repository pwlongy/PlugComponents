let mongoose = require("mongoose")

let contentSchema = mongoose.Schema({
  // 标题
  title: String,
  // 正文
  body: String,
  // 点赞
  support: Number,
  // 发布时间
  createTime: String
})

let contentModel = mongoose.model("contents", contentSchema)

module.exports =  contentModel