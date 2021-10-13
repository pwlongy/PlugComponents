let jwt = require("jsonwebtoken")

// 创建 token
function createToken(data){
  return jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data
  }, 'pengwei');
}

// 解密 token
function verifyToken(token){
  return jwt.verify(token, 'pengwei');
}

module.exports = {createToken, verifyToken}