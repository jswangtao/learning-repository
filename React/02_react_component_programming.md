
# <a id="list-two">2. React组件化编程</a> 

| 目录 |
| --- | 
|[2.1 组件的理解与使用](#two-one) |
|[2.2 组件的3大属性: state, props, refs](#two-two) |
|[2.3 组件中的事件处理](#two-three) |
|[2.4 组件的组合使用](#two-four) |
|[2.5 组件收集表单数据](#two-five) |
|[2.6 组件的生命周期](#two-six) |
|[2.7 虚拟DOM与DOM diff算法](#two-seven) |
|[2.8 命令式编程与声明式编程](#two-eight) |


## <a id="two-one">2.1. 基本理解和使用</a>
1. 自定义的标签: 组件类(函数)/标签
2. 创建组件类
	```
	//方式1: 无状态函数(简单组件, 推荐使用)
	function MyComponent1(props) {
		return <h1>自定义组件标题11111</h1>
	}
	//方式2: ES6类语法(复杂组件, 推荐使用)
	class MyComponent3 extends React.Component {
		render () {
			return <h1>自定义组件标题33333</h1>
		}
	}
	```
3. 渲染组件标签
	```
	ReactDOM.render(<MyComp />,  cotainerEle)
	```
	- 组件名必须首字母大写
	- 虚拟DOM元素只能有一个根元素
	- 虚拟DOM元素必须有结束标签

4. ReactDOM.render()渲染组件标签的基本流程
   - React内部会创建组件实例对象/调用组件函数
   - 得到虚拟DOM对象
   - 将虚拟DOM并解析为真实DOM，插入到指定的页面元素内部

> [返回目录](#list-two)

## <a id="two-two">2.2 组件的3大属性: state</a>
1. 组件被称为"状态机", 页面的显示是根据组件的state属性的数据来显示
2. 初始化指定:
	```
	constructor() {
		super()
		this.state = {
		stateName1 : stateValue1,
		stateName2 : stateValue2
		}
	}
	```
3. 读取显示: 
	```
	this.state.stateName1
	```
4. 更新状态-->更新界面 : 
	```
	this.setState({stateName1 : newValue})
	```
> [返回目录](#list-two)
## <a id="two-two">2.2. 组件的3大属性: props</a>
1. 所有组件标签的属性的集合对象
2. 给标签指定属性, 保存外部数据(可能是一个function)
3. 在组件内部读取属性: 
	```
	this.props.propertyName
	```
4. 作用: 从目标组件外部向组件内部传递数据
5. 对props中的属性值进行类型限制和必要性限制
	```
	Person.propTypes = {
		name: React.PropTypes.string.isRequired,
		age: React.PropTypes.number.isRequired
	}
	```
6. 扩展属性: 将对象的所有属性通过props传递
	```
	<Person {...person}/>
	```
7. 默认属性值
	```
	Person.defaultProps = {
	    name: 'Mary'
	}
	```
8. 组件类的构造函数
	```
	constructor (props) {
	     super(props)
	     console.log(props) // 查看所有属性
	}
	```
9. 问题: 请区别一下组件的props和state属性
	- state: 组件自身内部可变化的数据
	- props: 从组件外部向组件内部传递数据, 组件内部只读不修改

> [返回目录](#list-two)
## <a id="two-two">2.2 组件的3大属性: refs</a>
1. 组件内包含ref属性的标签元素的集合对象
2. 给操作目标标签指定ref属性, 打一个标识
3. 在组件内部获得标签对象: 
	```
	<input type="text" ref="msgInput"/>
	this.refs.msgInput
	```
	```
	<input type="text" ref={input => this.msgInput = input}/>
	this.msgInput
	```
	>两种运用refs的方法，官方建议用第二种，其实第一种较简单

	>尽量不要用refs，因为它实质上在操作DOM，而我们React是尽量不操作DOM
4. 作用: 找到组件内部的真实dom元素对象, 进而操作它
> [返回目录](#list-two)

## <a id="two-three">2.3 组件中的事件处理</a>
1. 给标签添加属性:
	```
	onXxx={this.eventHandler}
	onXxx={(a)=>this.eventHandler(a)}
	```
>前者不能传参，后者能传参
2. 在组件中添加事件处理方法
	```
	eventHandler(event) {
				
	}
	eventHandler=(event)=> {
				
	}
	```
>前者需要绑定this,后者不需要绑定this
3. 使自定义方法中的this为组件对象
	- 在constructor()中bind(this)
	- 使用箭头函数定义方法(ES6模块化编码时才能使用)
4. 事件监听
	- 绑定事件监听
		- 事件名
		- 回调函数
	- 触发事件
		- 用户对对应的界面做对应的操作
		- 编码
> [返回目录](#list-two)
## <a id="two-four">2.4 组件的组合使用</a>
1. 拆分组件: 拆分界面,抽取组件
2. 实现静态组件: 使用组件实现静态页面效果
3. 实现动态组件
	- 动态显示初始化数据
	- 交互功能(从绑定事件监听开始)
> [返回目录](#list-two)
## <a id="two-five">2.5 组件收集表单数据</a>
1. 受控组件
2. 非受控组件
>实时保存value值到state中为受控组件

> [返回目录](#list-two)
## <a id="two-six">2.6 组件的生命周期</a>
1. 组件的三个生命周期状态:
	- Mount：插入真实 DOM
	- Update：被重新渲染
	- Unmount：被移出真实 DOM
2. 生命周期流程:

    ![组件生命周期](https://github.com/WTxiaomage/learning-repository/blob/master/React/images/react-lifecycle-old.png)

- 第一次初始化显示: 
	```
	ReactDOM.render(<Xxx/>, containDom)
	```
	- constructor()
	- componentWillMount() : 将要插入回调
	- render() : 用于插入虚拟DOM回调
	- componentDidMount() : 已经插入回调
- 每次更新state: 
	```
	this.setState({})
	```
	- componentWillReceiveProps(): 接收父组件新的属性
	- componentWillUpdate() : 将要更新回调
	- render() : 更新(重新渲染)
	- componentDidUpdate() : 已经更新回调
- 删除组件: 
	```
	ReactDOM.unmountComponentAtNode(div): 移除组件
	```
	- componentWillUnmount() : 组件将要被移除回调
3. 常用的方法
- render(): 必须重写, 返回一个自定义的虚拟DOM
- constructor(): 初始化状态, 绑定this(可以箭头函数代替)
- componentDidMount() : 只执行一次, 已经在dom树中, 适合启动/设置一些监听
- componentWillReceiveProps()
4. 新版生命周期

	![组件生命周期](https://github.com/WTxiaomage/learning-repository/blob/master/React/images/react-lifecycle-16.4.png)

	![组件生命周期](https://github.com/WTxiaomage/learning-repository/blob/master/React/images/react-lifecycle-all-16.4.png)
- 常用的钩子函数
	- render(): 初始化渲染或更新渲染调用
	- componentDidMount(): 开启监听,添加订阅, 发送ajax请求
	- componentWillUnmount(): 做一些收尾工作, 如: 清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅
	- componentDidUpdate():当组件更新后，可以在此处对 DOM 进行操作。如果你对更新前后的 props 进行了比较，也可以选择在此处进行网络请求
- 不常用的钩子函数
	- shouldComponentUpdate(): 根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响
- 将废弃钩子函数
	- componentWillMount()
	- componentWillReceiveProps()
	- componentWillUpdate()

> [官方组件生命周期函数](https://react.docschina.org/docs/react-component.html)
> [官方组件生命周期图](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

> [返回目录](#list-two)

## <a id="two-seven">2.7 虚拟DOM与DOM diff算法</a>
### 1). 虚拟DOM是什么?
一个虚拟DOM(元素)是一个一般的js对象, 准确的说是一个对象树(倒立的)
虚拟DOM保存了真实DOM的层次关系和一些基本属性，与真实DOM一一对应
如果只是更新虚拟DOM, 页面是不会重绘的
### 2). Virtual DOM 算法的基本步骤
用JS对象树表示DOM树的结构；然后用这个树构建一个真正的DOM树插到文档当中
当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
把差异应用到真实DOM树上，视图就更新了
### 3). 进一步理解
Virtual DOM 本质上就是在 JS 和 DOM 之间做了一个缓存。
可以类比 CPU 和硬盘，既然硬盘这么慢，我们就在它们之间加个缓存：既然 DOM 这么慢，我们就在它们 JS 和 DOM 之间加个缓存。CPU（JS）只操作内存（Virtual DOM），最后的时候再把变更写入硬盘（DOM）。

![Virtual DOM 算法](https://github.com/WTxiaomage/learning-repository/blob/master/React/images/react-diff.png)

> [返回目录](#list-two)
## <a id="two-eight">2.8 命令式编程与声明式编程</a>
1. 声明式编程
	- 只关注做什么, 而不关注怎么做(流程),  类似于填空题
2. 命令式编程
	- 要关注做什么和怎么做(流程), 类似于问答题
	```
	var arr = [1, 3, 5, 7]
	// 需求: 得到一个新的数组, 数组中每个元素都比arr中对应的元素大10: [11, 13, 15, 17]
	// 命令式编程
	var arr2 = []
	for(var i =0;i<arr.length;i++) {
		arr2.push(arr[i]+10)
	}
	console.log(arr2)
	// 声明式编程
	var arr3 = arr.map(function(item){
		return item +10
	})
	// 声明式编程是建立命令式编程的基础上

	// 数组中常见声明式方法
		map() / forEach() / find() / findIndex()
	```
> [返回目录](#list-two)


