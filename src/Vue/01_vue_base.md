# <a id="list-one">1. Vue 基本知识</a>

| 目录                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------- |
| [1.1. Vue 基本认识](#one-one)                                                                                    |
| [1.2. Vue 基本使用](#one-two)                                                                                    |
| [1.3. Vue 对象的选项](#one-three)                                                                                |
| [1.4 Vue 过渡动画](#one-four)                                                                                    |
| [1.5 Vue 生命周期](#one-five)                                                                                    |
| [1.6 Vue 自定义过滤器](#one-six)                                                                                 |
| [1.7 Vue 内置指令](#one-seven)                                                                                   |
| [1.8 Vue 自定义指令](#one-eight)                                                                                 |
| [1.9 Vue 基础 DEMO](https://github.com/WTxiaomage/learning-repository/tree/master/src/Vue/demo/01_vue_base_demo) |

<br/>
<br/>

### <a id="one-one" class='part-part'>1.1 Vue 的基本认识</a>

1. 一位华裔前 Google 工程师(尤雨溪)开发的前端 js 库
2. 作用: 动态构建用户界面
3. 特点:
   - 遵循 MVVM 模式
   - 编码简洁, 体积小, 运行效率高, 移动/PC 端开发
   - 它本身只关注 UI, 可以轻松引入 vue 插件和其它第三库开发项目
4. 与其它框架的关联:
   - 借鉴 angular 的模板和数据绑定技术
   - 借鉴 react 的组件化和虚拟 DOM 技术
5. vue 包含一系列的扩展插件(库):
   - vue-cli: vue 脚手架
   - vue-resource(axios): ajax 请求
   - vue-router: 路由
   - vuex: 状态管理
   - vue-lazyload: 图片懒加载
   - vue-scroller: 页面滑动相关
   - mint-ui: 基于 vue 的组件库(移动端)
   - element-ui: 基于 vue 的组件库(PC 端)

### <a id="one-two" class='part-part'>1.2 Vue 基本使用</a>

1. 引入 vue.js
2. 创建 Vue 实例对象(vm), 指定选项(配置)对象
   - el : 指定 dom 标签容器的选择器
   - data : 指定初始化状态数据的对象/函数(返回一个对象)
3. 在页面模板中使用双大括号或 vue 指令

### <a id="one-three" class='part-part'>1.3 Vue 对象的选项</a>

1. el

   - 指定 dom 标签容器的选择器
   - Vue 就会管理对应的标签及其子标签

2. data

   - 对象或函数类型
   - 指定初始化状态属性数据的对象
   - vm 也会自动拥有 data 中所有属性
     页面中可以直接访问使用
     数据代理: 由 vm 对象来代理对 data 中所有属性的操作(读/写)

3. methods

   - 包含多个方法的对象
   - 供页面中的事件指令来绑定回调
   - 回调函数默认有 event 参数, 但也可以指定自己的参数
   - 所有的方法由 vue 对象来调用, 访问 data 中的属性直接使用 this.xxx

4. computed

   - 包含多个方法的对象
   - 对状态属性进行计算返回一个新的数据, 供页面获取显示
   - 一般情况下是相当于是一个只读的属性
   - 利用 set/get 方法来实现属性数据的计算读取, 同时监视属性数据的变化
   - 如何给对象定义 get/set 属性在创建对象时指定:

     ```
     get name () {
     	return xxx
     }
     set name (value) {

     }
     ```

   - 对象创建之后指定:

     ```
     Object.defineProperty(obj, age, {
     		get(){},
     		set(value){}
     })
     ```

5. watch

   - 包含多个属性监视的对象
   - 分为一般监视和深度监视

     ```
     xxx: function(value){}
     xxx : {
          deep : true,
          handler : fun(value)
     }
     ```

   - 另一种添加监视方式:

     ```
     vm.$watch('xxx', function(value){})
     ```

### <a id="one-four" class='part-part'>1.4 Vue 过渡动画</a>

- 利用 vue 去操控 css 的 transition/animation 动画
- 模板:
  使用`<transition name='xxx'>`包含带动画的标签
- css 样式

  ```
  .fade-enter-active: 进入过程, 指定进入的 transition
  .fade-leave-active: 离开过程, 指定离开的 transition
  .xxx-enter, .xxx-leave-to: 指定隐藏的样式
  ```

- 编码例子

  ```
  .xxx-enter-active, .xxx-leave-active {
       transition: opacity .5s
  }
  .xxx-enter, .xxx-leave-to {
       opacity: 0
  }

  <transition name="xxx">
       <p v-if="show">hello</p>
  </transition>
  ```

### <a id="one-five" class='part-part'>1.5 Vue 生命周期</a>

- vm/组件对象

![mvvm图](./images/mvvm.jpg)

- 生命周期图

![生命周期图](./images/vue_lifecycle.jpg)

- 主要的生命周期函数(钩子)
  - created() / mounted(): 启动异步任务(启动定时器,发送 ajax 请求, 绑定监听)
  - beforeDestroy(): 做一些收尾的工作

### <a id="one-six" class='part-part'>1.6 Vue 自定义过滤器</a>

- 理解
  对需要显示的数据进行格式化后再显示

- 编码



### <a id="one-seven" class='part-part'>1.7 Vue 内置指令</a>

- v-text/v-html: 指定标签体
- v-text : 当作纯文本
- v-html : 将 value 作为 html 标签来解析
- v-if v-else v-show: 显示/隐藏元素
- v-if : 如果 vlaue 为 true, 当前标签会输出在页面中
- v-else : 与 v-if 一起使用, 如果 value 为 false, 将当前标签输出到页面中
- v-show: 就会在标签中添加 display 样式, 如果 vlaue 为 true, display=block, 否则是 none
- v-for : 遍历
  - 遍历数组 : v-for="(person, index) in persons"
  - 遍历对象 : v-for="value in person" \$key
- v-on : 绑定事件监听
  - v-on:事件名, 可以缩写为: @事件名
  - 监视具体的按键: @keyup.keyCode @keyup.enter
  - 停止事件的冒泡和阻止事件默认行为: @click.stop @click.prevent
  - 隐含对象: \$event
- v-bind : 强制绑定解析表达式
  - html 标签属性是不支持表达式的, 就可以使用 v-bind
  - 可以缩写为:
    ```
    :id='name'
    :class="a"
    :class="{classA : isA, classB : isB}"
    :class="[classA, classB]"
    :style="{color : color}"
    ```
- v-model

  - 双向数据绑定
  - 自动收集用户输入数据

- ref : 标识某个标签
  - ref='xxx'
  - 读取得到标签对象: this.\$refs.xxx

### <a id="one-eight" class='part-part'>1.8 Vue 自定义指令</a>

- 注册全局指令

  ```
  Vue.directive('my-directive', function(el, binding){
       el.innerHTML = binding.value.toUpperCase()
  })
  ```

- 注册局部指令

  ```
  directives : {
       'my-directive':function(el, binding) {
            el.innerHTML = binding.value.toUpperCase()
       }
  }
  ```

- 使用指令

  ```
  <div v-my-directive='xxx'>
  ```
