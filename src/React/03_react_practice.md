# <a id="list-three">3 使用 create-react-app 创建 react 应用</a>

| 目录                                          |
| --------------------------------------------- |
| [3.1 react 脚手架](#three-one)                |
| [3.2 创建项目并启动](#three-two)              |
| [3.3 react 脚手架项目结构](#three-three)      |
| [3.4 使用脚手架开发的项目的特点](#three-four) |
| [3.5 组件化编写项目的流程](#three-five)       |
| [3.6 app1: 实现一个评论管理功能](#three-six)       |
| [3.7 组件间通信总结](#three-seven)       |
| [3.8 ES6 新语法总结](#three-eight)       |
| [3.9 项目打包运行](#three-nine)       |

### <a id="three-one" class='part-part'>3.1 react 脚手架</a>

1. xxx 脚手架: 用来帮助程序员快速创建一个基于 xxx 库的模板项目
   - 包含了所有需要的配置
   - 指定好了所有的依赖
   - 可以直接安装/编译/运行一个简单效果
2. react 提供了一个专门用于创建 react 项目的脚手架库: create-react-app
3. 项目的整体技术架构为: react + webpack + es6 + babel + eslint

### <a id="three-two" class='part-part'>3.2 创建项目并启动</a>

```
npm install -g create-react-app
create-react-app react-app
cd react-app
npm start
```

### <a id="three-three" class='part-part'>3.3 react 脚手架项目结构</a>

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

### <a id="three-four" class='part-part'>3.4 使用脚手架开发的项目的特点</a>

- 模块化: js 是一个一个模块编写的
- 组件化: 界面是由多个组件组合编写实现的
- 工程化: 实现了自动构建/运行/打包的项目

### <a id="three-five" class='part-part'>3.5 组件化编写项目的流程</a>

- 拆分组件
- 实现静态组件--->静态页面
- 实现动态组件
  动态显示初始化数据
  交互

### <a id="three-six" class='part-part'>3.6 app1: 实现一个评论管理功能</a>

![demo1-react-comment](./images/demo_comment.gif)
[demo1-react-comment 地址](https://github.com/WTxiaomage/learning-repository/tree/master/src/React/demo/demo1-react-comment)

1. 拆分组件:

   - 应用组件: app
   - 添加评论组件: comment-add
   - 评论项组件: comment-item
   - 评论列表组件: comment-list

2. 确定组件的 state 和 props:

   - app:
     - state: comments/array
   - comment-add
     - state: username/string, content/string
     - props: add/func
   - comment-list
     - props: comments/array, delete/func
   - comment-item
     - props: comment/object, delete/func, index/number

3. 编写静态组件

   - 拆分页面
   - 拆分 css

4. 实现动态组件

   - 动态展示初始化数据
     - 初始化状态数据
     - 传递属性数据
   - 响应用户操作, 更新组件界面
     - 绑定事件监听, 并处理
     - 更新 state

### <a id="three-seven" class='part-part'>3.7 组件间通信总结</a>

1. 方式一: 通过 props 传递

   - 共同的数据放在父组件上, 特有的数据放在自己组件内部(state)
   - 一般数据-->父组件传递数据给子组件-->子组件读取数据
   - 函数数据-->子组件传递数据给父组件-->子组件调用函数
     > 问题: 多层传递属性麻烦, 兄弟组件通信不方便

2. 方式二: 使用消息订阅(subscribe)-发布(publish)机制: 自定义事件机制

   ```
   工具库: PubSubJS
   下载: npm install pubsub-js --save
   使用:
       import PubSub from 'pubsub-js' //引入
       PubSub.subscribe('delete', function(msg, data){ }); //订阅
       PubSub.publish('delete', data) //发布消息
   优点: 可以支持任意关系组件之间的通信
   ```
3. 方式三: [Redux](./04_redux.md)

4. 事件监听理解

   - DOM 事件
     - 绑定事件监听 - 事件名(类型): 只有有限的几个, 不能随便写 - 回调函数
     - 用户操作触发事件(event) - 事件名(类型) - 数据
   - 自定义事件
     - 绑定事件监听 - 事件名(类型): 任意 - 回调函数: 通过形参接收数据, 在函数体处理事件
     - 触发事件(编码) - 事件名(类型): 与绑定的事件监听的事件名一致 - 数据: 会自动传递给回调函数

### <a id="three-eight" class='part-part'>3.8 ES6 新语法总结</a>

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

### <a id="three-nine" class='part-part'>3.9 项目打包运行</a>

```
npm run build  //生成打包文件
npm install -g serve  //全局下载服务器包
serve build  //通过服务器命令运行打包项目
访问: http://localhost:5000  //浏览器访问
```
