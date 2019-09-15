# <a id="list-one">1. React 基础</a>

| 目录                                              |
| ------------------------------------------------- |
| [1.1 React 基本认识](#one-one)                    |
| [1.2 React 基本使用](#one-two)                    |
| [1.3 JSX 的理解和使用](#one-three)                |
| [1.4 模块与模块化, 组件与组件化的理解](#one-four) |
| [1.5 基础DEMO](https://github.com/WTxiaomage/learning-repository/tree/master/src/React/demo/01_react_base_demo) |

<br/>
<br/>

### <a id="one-one" class='part-part'>1.1 React 的基本认识</a>

1. Facebook 开源的一个 js 库
2. 一个用来动态构建用户界面的 js 库
3. React 的特点
   - Declarative(声明式编码)
   - Component-Based(组件化编码)
   - Learn Once, Write Anywhere(支持客户端与服务器渲染)
   - 高效
   - 单向数据流
4. React 高效的原因
   - 虚拟 DOM(virtual), 不总是直接操作 DOM(批量更新, 减少更新的次数)
   - 高效的 DOM Diff 算法, 最小化页面重绘(减小页面更新的区域)

### <a id="one-two" class='part-part'>1.2 React 的基本使用</a>

1.  导入相关 js 库文件(react.js, react-dom.js, babel.min.js)
    - react.js: React 的核心库
    - react-dom.js: 提供操作 DOM 的 React 扩展库
    - babel.min.js: 解析 JSX 语法代码转为纯 JS 语法代码的库
2.  在 HTML 文件中编码:

    ```
    <script type="text/javascript" src="../js/react.development.js"></script>
    <script type="text/javascript" src="../js/react-dom.development.js"></script>
    <script type="text/javascript" src="../js/babel.min.js"></script>

    <div id="container"></div>
    <script type="text/babel">
    	var aa = 123
    	var bb = 'test'
    	ReactDOM.render(<h1 id={bb}>{aa}</h1>, containerDOM)
    </script>

    ```

### <a id="one-three" class='part-part'>1.3 JSX 的理解和使用</a>

1.  理解
    - 全称: JavaScript XML
    - react 定义的一种类似于 XML 的 JS 扩展语法: XML+JS
    - 作用: 用来创建 react 虚拟 DOM(元素)对象
2.  编码相关

    - js 中直接可以套标签, 但标签要套 js 需要放在{}中
    - 在解析显示 js 数组时, 会自动遍历显示
    - 把数据的数组转换为标签的数组:

    ```
    var liArr = dataArr.map(function(item, index){
    	return <li key={index}>{item}</li>
    })
    ```

    > 在 JSX 中 map 函数用的非常多，经常用它来将数组转化为 ReactDOM 数组,对数组的遍历每一项要加 key

3.  注意:

    - 标签必须有结束
    - 标签的 class 属性必须改为 className 属性
    - 标签的 style 属性值必须为:双大括号
    - className 要展现多个类名,前者是定死的类名，后者写活的，可以用于写动画效果

          	```
          	<h1 className="w1 w3">
          	{formatName(user)}
          	</h1>
          	<h1 className={["w1", "w3"].join(" ")}>
          		{formatName(user)}
          	</h1>
          	```

### <a id="one-four" class='part-part'>1.4 几个重要概念理解</a>

##### 1. 模块与组件

1. 模块:
   - 理解: 向外提供特定功能的 js 程序, 一般一个功能就是一个 js 文件
   - 为什么: js 代码更多更复杂
   - 作用: 复用 js, 简化 js 的编写, 提高 js 运行效率
2. 组件:
   - 理解: 用来实现特定功能效果的代码集合(html/css/js)
   - 为什么: 一个界面的功能太复杂了
   - 作用: 复用编码, 简化项目界面编码, 提高运行效率

##### 2. 模块化与组件化

1. 模块化:
   当应用的 js 都以模块来编写的, 这个应用就是一个模块化的应用
2. 组件化:
   当应用是以多组件的方式实现功能, 这上应用就是一个组件化的应用
