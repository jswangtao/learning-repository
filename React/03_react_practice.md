#  <a id="list">1. react应用(基于react脚手架)</a>

| 目录 |
| --- | 
|[3.1 使用create-react-app创建react应用](#three-one) |
|&emsp;[3.1.1 react脚手架](#three-one-one) |
|&emsp;[3.1.2 创建项目并启动](#three-one-two) |
|&emsp;[3.1.3 react脚手架项目结构](#three-one-three) |
|&emsp;[3.1.4 使用脚手架开发的项目的特点](#three-one-four) |
|&emsp;[3.1.5 组件化编写项目的流程](#three-one-five) |


## <a id="three-one">3.1 使用create-react-app创建react应用</a>

### <a id="three-one-one">3.1.1 react脚手架</a>
1. xxx脚手架: 用来帮助程序员快速创建一个基于xxx库的模板项目
    - 包含了所有需要的配置
    - 指定好了所有的依赖
    - 可以直接安装/编译/运行一个简单效果
2. react提供了一个专门用于创建react项目的脚手架库: create-react-app
3. 项目的整体技术架构为: react + webpack + es6  + babel + eslint
> [返回目录](#list)
### <a id="three-one-two">3.1.2 创建项目并启动</a>
```
npm install -g create-react-app
create-react-app react-app
cd react-app
npm start
```
> [返回目录](#list)
### <a id="three-one-three">3.1.3 react脚手架项目结构</a>
ReactNews
```
|--node_modules---第三方依赖模块文件夹
|--public
    |-- index.html-----------------主页面
|--scripts
    |-- build.js-------------------build打包引用配置
|--start.js-------------------start运行引用配置
|--src------------源码文件夹
    |--components-----------------react组件
    |--index.js-------------------应用入口js
|--.gitignore------git版本管制忽略的配置
|--package.json----应用包配置文件 
|--README.md-------应用描述说明的readme文件
```
> [返回目录](#list)
### <a id="three-one-four">3.1.4 使用脚手架开发的项目的特点</a>
- 模块化: js是一个一个模块编写的
- 组件化: 界面是由多个组件组合编写实现的
- 工程化: 实现了自动构建/运行/打包的项目
> [返回目录](#list)
### <a id="three-one-five">3.1.5 组件化编写项目的流程</a>
- 拆分组件
- 实现静态组件--->静态页面
- 实现动态组件
    动态显示初始化数据
    交互
> [返回目录](#list)


#  2. app1: 实现一个评论管理功能
![demo1-react-comment](https://github.com/WTxiaomage/learning-repository/blob/master/React/images/demo_comment.gif)
[demo1-react-comment地址](https://github.com/WTxiaomage/learning-repository/tree/master/React/demo/demo1-react-comment)
## 1). 拆分组件:
1. 应用组件: app
2. 添加评论组件: comment-add
3. 评论项组件: comment-item
4. 评论列表组件: comment-list
## 2). 确定组件的state和props:
1. app: 
	- state: comments/array
2. comment-add
	- state: username/string, content/string
	- props: add/func
3. comment-list
	- props: comments/array, delete/func
4. comment-item
	- props: comment/object, delete/func, index/number
## 3). 编写静态组件
- 拆分页面
- 拆分css
## 4). 实现动态组件
1. 动态展示初始化数据
	- 初始化状态数据
	- 传递属性数据
2. 响应用户操作, 更新组件界面
	- 绑定事件监听, 并处理
	- 更新state

# 4. 组件间通信总结
## 1). 方式一: 通过props传递
- 共同的数据放在父组件上, 特有的数据放在自己组件内部(state)
- 一般数据-->父组件传递数据给子组件-->子组件读取数据
- 函数数据-->子组件传递数据给父组件-->子组件调用函数
>问题: 多层传递属性麻烦, 兄弟组件通信不方便
	
## 2). 方式二: 使用消息订阅(subscribe)-发布(publish)机制: 自定义事件机制
```
工具库: PubSubJS
下载: npm install pubsub-js --save
使用: 
	import PubSub from 'pubsub-js' //引入
	PubSub.subscribe('delete', function(msg, data){ }); //订阅
	PubSub.publish('delete', data) //发布消息
优点: 可以支持任意关系组件之间的通信
```
## 3). 事件监听理解
1. DOM事件
	- 绑定事件监听
		- 事件名(类型): 只有有限的几个, 不能随便写
		- 回调函数
	- 用户操作触发事件(event)
		- 事件名(类型)
		- 数据
2. 自定义事件
	- 绑定事件监听
		- 事件名(类型): 任意
		- 回调函数: 通过形参接收数据, 在函数体处理事件
	- 触发事件(编码)
		- 事件名(类型): 与绑定的事件监听的事件名一致
		- 数据: 会自动传递给回调函数
      
# 5. ES6新语法总结
```
定义变量/常量: const/let
解构赋值: let {a, b} = this.props   import {aa} from 'xxx'
对象的简洁表达: {a, b}
箭头函数: 
	组件的自定义方法: xxx = () => {}
	map/filter的回调方法: (item, index) => {}
	优点:
		* 简洁
		* 没有自己的this,使用引用this查找的是外部this
扩展运算符: ...
	拆解对象:  const MyProps = {}, <Xxx {...MyProps}>
类: class/extends/constructor/super
ES6模块化: export default | import
```
# 6. 项目打包运行
```
npm run build  //生成打包文件
npm install -g serve  //全局下载服务器包
serve build  //通过服务器命令运行打包项目
访问: http://localhost:5000  //浏览器访问
```

