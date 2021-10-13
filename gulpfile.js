// 引入第三方模块 gulp
let gulp = require("gulp")

// 压缩 html 文件模块
let htmlmin = require('gulp-htmlmin')

// 压缩css文件模块
let cssmin = require("gulp-clean-css")

// 合并文件
let concat = require("gulp-concat")

// 压缩js文件
let uglify = require("gulp-uglify")

// 重命名
let rename = require("gulp-rename")

// 将ES6 语法转换成为 ES5 语法
let babel = require("gulp-babel")

// 启动服务
let connect = require("gulp-connect")



// 复制文件
// gulp.tack() 
// 功能：定义任务
// 参数：
//    任务名
//    任务对应的功能(函数)      在命令中执行 gulp 任务名时，会调用该回调函数
gulp.task('copy-index', async () =>{
  // gulp.src()  复制的来源，即源文件
  // pipe()      管道
  // gulp.dest   目的地，即把源文件复制到什么地方
  gulp.src("./文件读取数据.txt").pipe(gulp.dest("./dist"))

  // 复制某类型的文件（指定了扩展名）             *.某类型后缀名  gulp.src("./*.txt").pipe(gulp.dest("D:\\wuyou"))
  // 复制多个扩展名                              {jpg,png}      gulp.src("./*.{png,jpg}").pipe(gulp.dest("D:\\wuyou"))
  // 复制某个文件夹下所有文件及其子文件夹         *.*             gulp.src("./*.*").pipe(gulp.dest("D:\\wuyou"))
  // 复制多个文件夹的内容                        ['./*.jpg','*.png']
  // 复制时过滤文件                              !xxx.xx        gulp.src(["./*.*",'!gulpfile.js']).pipe(gulp.dest("D:\\wuyou"))
})



// 启动监听
gulp.task('watch-all', async () => {
  // 监听 当前文件夹下的所有 html 文件是否发生变化
  gulp.watch("./*.html", async () =>{
    gulp.src("./*html").pipe(gulp.dest('./dist'))
  })
})





// 压缩html文件
gulp.task('compress-file', async () =>{
  gulp.src("./文件读取数据.txt").pipe(htmlmin({
    collapseWhitespace: true,       // 压缩 html
    removeComments: true,           // 清除 html 注释
    collapseBooleanAttributes: true,  // 省略布尔属性的值   <input checked="true"/>
    removeEmptyAttributes: true,      // 删除所有空格做属性的值
    removeScriptTypeAttributes: true, // 删除type='text/javascript'
    removeStyleLinkTypeAttributes: true,   // 删除<link>的type="text.css"
    minifyJS: true,                     // 压缩页面 js
    minifyCSS: true                     // 压缩页面 css
  })).pipe(gulp.dest("D:\\wuyou"))
})

// 压缩 css 文件
gulp.task("compress-css", async () =>{
  gulp.src("./css/**/*").pipe(cssmin()).pipe(gulp.dest("D:\\woyou"))
})

// 合并文件
gulp.task("merge-file", async () =>{
  gulp.watch(['./js/a.js','./js/b.js'], async () =>{
    gulp.src(['./js/a.js','./js/b.js']).pipe(concat("common.js")).pipe(uglify()).pipe(gulp.dest("E:\\Adobe"))
  })
})

// 压缩js文件
// 因为压缩js不能识别 es6 语法， 所以需要 gulp-babel @babel/core @babel/preset-env 插件将 es6 语法转换成为 es5 语法
gulp.task("compress-js", async () =>{
  gulp.src("./02-fs模块.js").pipe(babel({presets:['@babel/env']})).pipe(uglify()).pipe(gulp.dest("./dist/js"))
})

