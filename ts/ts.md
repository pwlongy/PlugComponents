### ts基本操作

#### ts 安装

```javascript
// 全局安装
npm i install -g
// 测试版本号
tsc -v

// ts文件类型不能直接执行，需要先被编译成为 js文件
tsc 文件名

```

+ 因为文件需要一边修改一边编译很麻烦，所以需要监视器修改文件后自动编译

```javascript
// 第一步生成 ts 的配置文件
tsc --init
// 在终端 --->  运行任务  --->  tsc监视
```



#### ts 数据类型

ts 中为了使编写的代码更加规范，更有利于维护，增加了类型校验，ts中的变量必须指定数据类型才能进行赋值

```javascript
var a:number = 10
// 如果你想要修改成为其他类型就会报错

// array: 数组类型
// js 中没有一种数据类型叫做数组，js中数组的类型就是Object
// ts 中的数组，除了要指定变量是数组类型外，还要指定数组中存放的数据的类型: 
// 第一种表示方式 var arr:Array<number> 表示数组中只能存 number 数据类型的数据
// 第二种表示方式 var arr:number[] 表示数组中只能存 number 数据类型的数据

var arr:Array<number> = [1,2,23]
var arr1: number[] = [1,2,3,4]
```



#### 元组类型

元组类型：属于数组的一种，但是可以在集合中存放不同的数据类型，并且需要指定长度

```javascript
// 顺序必须一一对象，长度也必须要对应
var arr2:[number,string,boolean] = [1,'str',true]
```



#### 枚举类型

```javascript
// enum 枚举类型
// 枚举类型需要先定义好，然后使用
// 定义枚举类型：enum 类型名称{键=值,键=值}
enum sex{man=1,woman=2}
// 使用枚举类型
var manSex:sex = 1      // 1
// 直接给枚举类型的变量赋值不太好，需要从枚举类型中选择一个值并赋给变量
var woman:sex = sex.woman //2

// 当枚举类型只有键，没有值的时候，默认的值就是每个键的索引
enum color {red,yellow,blue}
var redColor:color = color.red    // 1


// 枚举类型里面，有的键有值，有的键没值
enum money{"钱币",'纸币'=8,'硬币'}
var moneyType:money = money.纸币 //8
var moneyType2:money = money.硬币 //9
// 有值的键后面的键，值默认是有键的值的递增
console.log(moneyType2)


//如果枚举类型中的值是字符串，那么后面所有的键都必须有值
enum game{"石头", '剪刀'='剪刀', '布'='布'}
var sgame:game = game.石头
console.log(sgame)
var jgame:game = game.剪刀
console.log(jgame)
var bgame:game = game.布
console.log(bgame)

```

#### 任意类型

```javascript
// 任意类型
// 有时候,定义好一个变量，但是不能确定后期这个变量的值是什么类型的，就可以定义这个变量的类型是任意类型 或者 有的变量希望他是任意类型的数据，也可以将
// 他设置为任意类型：any
var a1:any;
a1 = 10
a1 = "hello"
a1 = true
// 通常使用在值的一个对象的时候，因为在ts中并没有object这种类型
```

#### undefinde与null

```javascript
// undefined类型
var a2:number | undefined
// undefinde 的类型的值必须是 undefinde,不可以修改他的值
var a3:undefined

// null类型意义表示是空
var a4:null
// null 的类型的值必须是 null,不可以修改他的值
var a5:null

```

#### 函数返回值

```javascript
// 函数返回值，没有返回值，用什么表示？ void

function print():void{  // 为了约束函数的返回值，并没有返回值得时候，用void来表示

 console.log(123)

}
```

#### never类型

```javascript
// never 类型：其他类型，它包含null和undefinde两个子类型，代表从来不会出现的值，也就是说，never类型的变量只能被never类型的值所赋值 
var a6:never = (()=>{
  throw new Error("错误")
})()
// 此时，函数自调用，得到一个错误，正常的变量，他的值不可能为一个错误，这个错误不可能成为一个变量的值，这个时候，就说这个变量的值就是不可能出现的值的类型也就是 never

```

