### mongodb的基本命令

#### 1. 帮助命令

```
  	help

​	db.help()

​	db.test.help()

​	db.find().help()
```

#### 2.数据库操作命令



```javascript
	show bds  		显示所有的数据库

​	use dbname	切换数据库

​	db / db.getName()	查看当前数据库名称

​	db.stats()			显示当前 DB 的状态

​	db.version()		查看当前 DB 的版本

​	db.getMongo()	查看当前 DB 连接的主机地址

​	db.dropDatabase()	删除当前 DB
```

#### 3. 创建数据库和集合

​	

```
   use project 不存在就创建，存在就切换至

​	db.createCollection("集合名称 **[表名]** ")		创建集合 **【表名】**

​	db.createCollection("集合名称"，{size: 20,  capped: true, max: 100 })		创建固定容量的集合

​	show dbs	显示所有数据库

​	show collections / db.getCollectionNames()	查看当前database中的collection列表

​	db.user.isCapped	判断集合是否为定容量

​	db.getCollection("集合名称")	获取指定集合

​	db.printCollectionStats()		打印指定集合的状态
```



#### 4. 集合中的文档操作

​	4.1 添加文档数据

```
		db.**集合名称**.insertOne({})		向指定集合中插入文档

​		db.**集合名称**.insertMany([{},{}])

​    	db.**集合名称**.save({})
```



​	

​	4.2 修改文档数据

​		

```
		db.**集合名称**.updataOne({"name": "ajax"}, {$set:{"name": "jquery"})

​		db.**集合名称**.updataMany({},{$set: {'name': 'jquery'}})
```



​	4.3  删除文档数据

​		

```
		db.**集合名称**.deleteOne({"name": "jquery"})

​		db.**集合名称**.deleteMany({})

​		db.**集合名称**.remove({})		// 要指定删除的条件
```



​	4.4 查询文档数据

​		

```
		db.**集合名称**.find()		查询所有记录	

​		db.**集合名称**.distinct("字段名称")		字段去重

​		db.**集合名称**.find({age: 22}) 	查询 age = 22 的记录

​		db.**集合名称**.find(age: {$gt: 22})	 查询 age > 22 的记录

​		db.**集合名称**.find(age: {$lt: 22})		查询age < 22 的记录

​		db.**集合名称**.find(age: {$gte: 22})	查询age >= 22 的记录

​		db.**集合名称**.find(age: {$lte: 22})	 查询age <= 22 的记录

​		db.**集合名称**.find(age: {$gte: 20, $lte 22})  查询 age >= 20 并且小于等于 22

​		db.**集合名称**.find(name: /jquery/)		查询name中包含jquery

的记录

​		db.**集合名称**.find(name: /^jquery/)		查询 name 以jquery开头的记录

​		db.**集合名称**.find({}, {name: 1, age: 1})	查询所有记录，只返回name和age字段(1-显示， 0- 不显示)

​		db.**集合名称**.find().sort({age: 1})	按age 进行升序排列

​		db.**集合名称**.find().sort({age: -1})	按age 进行降序排列

​		db.**集合名称**.find({},name: 'jquery',age: 1,_id: 0).sort(age: 1)

​		db.**集合名称**.find({name: 'jquery', age: 22})	查询name = jquery && age = 22

​		db.**集合名称**.find().limit(5)	只查询前5条数据

​		db.**集合名称**.find().skip(10)	查询10条以后的数据

​		db.**集合名称**.find().skip(5).limit(5)  查询5条数据之后的5条数据

​		db.**集合名称**.find($or:[{age: 20}, {age: 25}])	 查询age = 20 或者 age = 25	

​		db.**集合名称**.findOne()		查询满足条件的第一条数据

​		db.**集合名称**.find({age: {$gte: 25}}).count()		查询age >= 25 数据的总条数

​		db.**集合名称**.find({grade: {$exists: true}})	查询含有 grade的字段

​		db.**集合名称**.find({sex:{$exists:true}}).count()	查询存在sex字段的记录总条数	
```

 
