### ts中定义类

```javascript
// ts中类的定义
class Animal{
  // 属性的定义
  // 属性的定义必不可少
  // public 变量名：类型;
  public name:string;

  // 在 ts 中，类里面也有一个方法叫做 constructor，也是在new的时候执行，且只执行一次
  constructor(name:string){
    this.name = name
  }

  // ts中类的定义方法 - 和 es6 中一样
  sport(){
    console.log("喜欢运动")
  }

}
let animal = new Animal("兔子")
```

### ts 中继承

```javascript
// ts 继承
class Rubbit extends Animal{
  // 属性可以继承下来，不用重新定义
  constructor(name:string){
    super(name)
  }
}
```



### 类的修饰符

```javascript

// ts 修饰符
/*
  public          公有的 -  在类的里面、子类中、类的外部都可以访问
  protected       受保护的 - 在类的里面、子类中可以访问，在类的外面不能被访问
  private         私有的-在类里面可以被访问，在子类和类的外面不能访问
*/ 
// 正常情况下，属性和方法都需要加修饰符，但是 public 可以省略
// 修饰符：是用来修饰类的属性和方法的，加修饰符，是用来指定被修饰的属性或方法的使用范围 
class Person{
  public name:string = '张三'

  printInfo(){
    console.log(this.name+"是一个帅哥")   // 在类的里面使用public 修饰的属性 - public 修饰的属性在类的内部能使用
  
    this.print()  // 在类的内部调用使用 被 public 修饰的方法
  }

  public print(){
    console.log(1111111)
  }
}

let p = new Person()
console.log(p.name)   // 在类的外部调用被 public 修饰的属性
console.log(p.print())   // 在类的外部调用被 public 修饰的属性

class man extends Person{
  printName(){
    console.log(this.name)  // 调用父类中定义的被 public 修饰的属性
  }
}
```



### ts静态属性和方法

```javascript
// ts 中的静态属性和方法
// 静态属性或静态方法： 指的是能被类直接调用的属性和方法
class User{
  public name:string = "小明"

  // 定义静态属性
  // static 属性名称：类型；
  static age:number = 20
  public print(){
    console.log(123)
  }
}

let user = new User()
console.log(user.name)
user.print()
// 这些正常的属性和方法能不能被类调用？ 不能
// console.log(User.name)     // 错误写法
// 静态的方法只能被类使用，不能被实例对象使用
console.log(User.age)
// console.log(user.age)
```

### 多态

```javascript

// ts 多态
// 面向对象的三大特点： 封装、继承、多态
// 多态就是多个子类继承自同一个父类，但是每个子类将继承下来的属性和方法做了改善，最终每个子类表现出来的结果是不一样的

```

