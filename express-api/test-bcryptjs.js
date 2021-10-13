let bcryptjs = require('bcryptjs')

let str = 'pengwei'

// 通过 Hash 加密
/*
  bcryptjs.hash(参数一, 参数二)
    参数一： 需要加密的字符
    参数二： 加密强度 1-12
  
*/
let hashPassword = bcryptjs.hash(str, 12, (err, hash) => {
  if(err){
    console.log(err)
  }else{
    console.log(hash)
  }
})
console.log(hashPassword)
// 通过 compare 方法来判断加密前后的字符是否一致

async function bcy(){
  let isTrue = await bcryptjs.compare("pengwei",'$2a$12$1XWhKloCg/idrV2YbNjude/maNBq6NgIO17EI8q3LHckI/n.b2GDi')
  console.log(isTrue)
}
bcy()