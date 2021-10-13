let mongoose = require("mongoose")

let userSchema = mongoose.Schema({
  // 用户名
  username: String,
  // 密码
  password: String,
  // 头像
  avatar: String
})

let userModel = mongoose.model("users", userSchema)
module.exports =  userModel