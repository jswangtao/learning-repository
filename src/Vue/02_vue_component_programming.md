# <a id="list-two">2. Vue 组件化编程</a>

| 目录                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------- |
| [2.1 Vue 脚手架](#two-one)                                                                                                      |
| [2.2 ESlint](#two-two)                                                                                                          |
| [2.3 组件化编程](#two-three)                                                                                                    |
| [2.4 ajax](#two-four)                                                                                                           |
| [2.5 vue-router](#two-five)                                                                                                     |
| [2.6 组件化 DEMO](https://github.com/WTxiaomage/learning-repository/tree/master/src/Vue/demo/02_vue_component_programming_demo) |

## <a id="two-one" class='part-part'>2.1 Vue 脚手架</a>

- 用来创建 vue 项目的工具包
- 创建项目:
  ```
  npm install -g vue-cli
  vue init webpack vue_demo
  ```
- 开发环境运行:
  ```
  cd vue_demo
  npm install
  npm run dev
  ```
- 生产环境打包发布

  ```
  npm run build
  npm install -g serve
  serve dist
  http://localhost:5000
  ```

## <a id="two-two" class='part-part'>2.2 ESlint</a>

- 用来做项目编码规范检查的工具
- 基本原理: 定义了很多规则, 检查项目的代码一旦发现违背了某个规则就输出相应的提示信息
  有相应的配置, 可定制检查

## <a id="two-three" class='part-part'>2.3 组件化编程</a>

1. vue 文件包含 3 个部分

   ```
   <template>
     <div></div>
   </template>
   <script>
     export default {
       props: []/{}
       data(){},
       computed: {}
       methods: {},
       watch: {}
       filters: {}
       directives: {}
       components: {}
     }
   </script>
   <style>
   </style>
   ```

2. 组件化编码的基本流程

   - 拆分界面, 抽取组件
   - 编写静态组件
   - 编写动态组件
     - 初始化数据, 动态显示初始化界面
     - 实现与用户交互功能

3. 组件通信的 5 种方式
   - props
   - vue 的自定义事件
   - pubsub 第三方库
   - slot
   - vuex(后面单独讲)
4. props:
   - 父子组件间通信的基本方式
   - 属性值的 2 大类型:
     - 一般: 父组件-->子组件
     - 函数: 子组件-->父组件
   - 隔层组件间传递: 必须逐层传递(麻烦)
   - 兄弟组件间: 必须借助父组件(麻烦)
5. vue 自定义事件
   - 子组件与父组件的通信方式
   - 用来取代 function props
   - 不适合隔层组件和兄弟组件间的通信
6. pubsub 第三方库(消息订阅与发布)
   - 适合于任何关系的组件间通信
7. slot
   - 通信是带数据的标签
   - 注意: 标签是在父组件中解析
8. vuex
   - 多组件共享状态(数据的管理)
   - 组件间的关系也没有限制
   - 功能比 pubsub 强大, 更适用于 vue 项目

## <a id="two-four" class='part-part'>2.4 ajax</a>

1. 相关库:
   - vue-resource: vue 插件, 多用于 vue1.x
   - axios: 第三方库, 多用于 vue2.x
2. vue-resource 使用

   ```
   // 引入模块
   import VueResource from 'vue-resource'
   // 使用插件
   Vue.use(VueResource)

   // 通过vue/组件对象发送ajax请求
   this.$http.get('/someUrl').then((response) => {
     // success callback
     console.log(response.data) //返回结果数据
   }, (response) => {
     // error callback
     console.log(response.statusText) //错误信息
   })
   ```

3. axios 使用

   ```
   // 引入模块
   import axios from 'axios'

   // 发送ajax请求
   axios.get(url)
     .then(response => {
       console.log(response.data) // 得到返回结果数据
     })
     .catch(error => {
     console.log(error.message)
     })
   ```

## <a id="two-five" class='part-part'>2.5 vue-router</a>

1. vue 用来实现 SPA 的插件
2. 使用 vue-router
   - 创建路由器: router/index.js
     ```
     new VueRouter({
       routes: [
         { // 一般路由
           path: '/about',
           component: about
         },
         { // 自动跳转路由
           path: '/',
           redirect: '/about'
         }
       ]
     })
     ```
   - 注册路由器: main.js
     ```
     import router from './router'
     new Vue({
       router
     })
     ```
   - 使用路由组件标签:
     ```
     <router-link to="/xxx">Go to XXX</router-link>
     <router-view></router-view>
     ```
3. 编写路由的 3 步
   - 定义路由组件
   - 映射路由
   - 编写路由 2 个标签
4. 嵌套路由
   ```
   children: [
       {
         path: '/home/news',
         component: news
       },
       {
         path: 'message',
         component: message
       }
     ]
   ```
5. 向路由组件传递数据
   ```
   params: <router-link to="/home/news/abc/123">
   props: <router-view msg='abc'>
   ```
6. 缓存路由组件
   ```
   <keep-alive>
     <router-view></router-view>
   </keep-alive>
   ```
7. 路由的编程式导航

   - this.\$router.push(path): 相当于点击路由链接(可以返回到当前路由界面)
   - this.\$router.replace(path): 用新路由替换当前路由(不可以返回到当前路由界面)
   - this.\$router.back(): 请求(返回)上一个记录路由
