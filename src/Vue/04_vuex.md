# <a id="list-four">4. Vuex</a> 

| 目录                         |
| ---------------------------- |
| [4.1 vuex是什么](#four-one)|
| [4.2 状态自管理应用](#four-two)|
| [4.3 多组件共享状态的问题](#four-three)|
| [4.4 vuex的核心概念](#four-four)|
| [4.5 将vuex引到项目中](#four-five)|



## <a id="four-one">4.1 vuex是什么</a>
- github站点: https://github.com/vuejs/vuex
- 在线文档: https://vuex.vuejs.org/zh-cn/
- 简单来说: 对应用中组件的状态进行集中式的管理(读/写)
> [返回目录](#list-four)

## <a id="four-two">4.2 状态自管理应用</a>
- state: 驱动应用的数据源
- view: 以声明方式将state映射到视图
- actions: 响应在view上的用户输入导致的状态变化(包含n个更新状态的方法)

	![单向数据流](https://github.com/WTxiaomage/learning-repository/blob/master/Vue/images/flow.png)

> [返回目录](#list-four)

## <a id="four-three">4.3 多组件共享状态的问题</a>
- 多个视图依赖于同一状态
- 来自不同视图的行为需要变更同一状态
- 以前的解决办法
	* 将数据以及操作数据的行为都定义在父组件
	* 将数据以及操作数据的行为传递给需要的各个子组件(有可能需要多级传递)
- vuex就是用来解决这个问题的

	![vuex结构](https://github.com/WTxiaomage/learning-repository/blob/master/Vue/images/Vuex%E7%BB%93%E6%9E%84%E5%9B%BE.png)

> [返回目录](#list-four)

## <a id="four-four">4.4 vuex的核心概念</a>
1. state
- vuex管理的状态对象
- 它应该是唯一的
	```
	const state = {
		xxx: initValue
	}
	```
2. mutations
- 包含多个直接更新state的方法(回调函数)的对象
- 谁来触发: action中的commit('mutation名称')
- 只能包含同步的代码, 不能写异步代码
	```
	const mutations = {
		yyy (state, data) { 
			// 更新state的某个属性
		}
	}
	```
3. actions
- 包含多个事件回调函数的对象
- 通过执行: commit()来触发mutation的调用, 间接更新state
- 谁来触发: 组件中: $store.dispatch('action名称')  // 'zzz'
- 可以包含异步代码(定时器, ajax)
	```
	const actions = {
		zzz ({commit, state}, data1) {
			commit('yyy', data2)
		}
	}
	```
4. getters
- 包含多个计算属性(get)的对象
- 谁来读取: 组件中: $store.getters.xxx
	```
	const getters = {
		mmm (state) {
			return ...
		}
	}
	```
5. modules
- 包含多个module
- 一个module是一个store的配置对象
- 与一个组件(包含有共享数据)对应

6. 向外暴露store对象
	```
	export default new Vuex.Store({
		state,
		mutations,
		actions,
		getters
	})
	```
7. 组件中:
	```
	import {mapGetters, mapActions} from 'vuex'
	export default {
		computed: mapGetters(['mmm'])
		methods: mapActions(['zzz'])
	}

	{{mmm}} @click="zzz(data)"
	```

8. 映射store
	```
	import store from './store'
	new Vue({
		store
	})
	```

9. store对象
	- 所有用vuex管理的组件中都多了一个属性$store, 它就是一个store对象
	- 属性:
		state: 注册的state对象
		getters: 注册的getters对象
	- 方法:
		dispatch(actionName, data): 分发action 
> [返回目录](#list-four)

## <a id="four-five">4.5 将vuex引到项目中</a>
1. 下载: npm install vuex --save
2. 使用vuex
	- store.js
		```
		import Vuex from 'vuex'
		export default new Vuex.Store({
			state,
			mutations,
			actions,
			getters,
			modules
		})
		```
	- main.js
		```
		import store from './store.js'
		new Vue({
			store
		})
		```
> [返回目录](#list-four)