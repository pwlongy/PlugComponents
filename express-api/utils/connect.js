// 连接 mongodb 数据库
const mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost/blog', {   // 注意更改数据库名称
  useNewUrlParser: true,
  useUnifiedTopology: true
});    

// 判断数据库是否连接成功
let conn = mongoose.connection
conn.on('erron', (err)=>{
  console.log("数据库连接失败", err)
})

conn.on("open", () =>{
  console.log('数据库连接成功')
})
