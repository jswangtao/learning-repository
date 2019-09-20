# <a id="list-four">4 React-Router</a>

| 目录                                       |
| ------------------------------------------ |
| [4.1 react-router 理解](#four-one)         |
| [4.2 redux 相关 API](#four-two)            |
| [4.3 react-router 的学习资源](#four-three) |
| [4.4 相关 API](#four-four)                 |
| [4.5 react-router 的基本使用](#four-five)  |
| [4.6 向路由组件传递请求参数](#four-six)    |
| [4.7 优化 Link 组件](#four-seven)          |

### <a id="four-one" class='part-part'>4.1 react-router 理解</a>

- React 的一个插件库
- 专门用来实现一个 SPA 应用
- 基于 React 的项目基本都会用到此库

### <a id="four-two" class='part-part'>4.2 几个重要问题</a>

1. SPA 应用

   - 单页 Web 应用（single page web application，SPA）
   - 整个应用只有一个完整的页面
   - 点击页面中的链接不会刷新页面, 本身也不会向服务器发请求
   - 当点击链接时, 只会做页面的局部更新
   - 数据都需要通过 ajax 请求获取, 并在前端异步展现

2. 路由

   - 什么是路由?
     - 一个路由就是一个映射关系(key:value)
     - key 为路由路径, value 可能是 function/component
   - 路由分类
     - 后台路由: node 服务器端路由, value 是 function, 用来处理客户端提交的请求并返回一个响应数据
     - 前台路由: 浏览器端路由, value 是 component, 当请求的是路由 path 时, 浏览器端前没有发送 http 请求, 但界面会更新显示对应的组件
   - 后台路由
     - 注册路由: `router.get(path, function(req, res))`
     - 当 node 接收到一个请求时, 根据请求路径找到匹配的路由, 调用路由中的函数来处理请求, 返回响应数据
   - 前端路由
     - 注册路由: `<Route path="/about" component={About}>`
     - 当浏览器的 hash 变为`#about` 时, 当前路由组件就会变为 About 组件

3. 关于 url 中的

   - 理解#
     - '#'代表网页中的一个位置。其右面的字符，就是该位置的标识符
     - 改变#不触发网页重载
     - 改变#会改变浏览器的访问历史
   - 操作#
     - window.location.hash 读取#值
     - window.onhashchange = func 监听 hash 改变
   - 学习资源:
     - [阮一峰教程 url_hash](http://www.ruanyifeng.com/blog/2011/03/url_hash.html)

### <a id="four-three" class='part-part'>4.3 react-router 的学习资源</a>

- github 主页: https://github.com/ReactTraining/react-router
- 官网教程: https://github.com/reactjs/react-router-tutorial

### <a id="four-four" class='part-part'>4.4 相关 API</a>

1. react-router 中的相关组件:

   - router: 路由器组件, 用来包含各个路由组件
   - route: 路由组件, 注册路由
   - IndexRoute: 默认子路由组件
   - hashHistory: 路由的切换由 URL 的 hash 变化决定，即 URL 的#部分发生变化
   - Link: 路由链接组件

2. router: 路由器组件

   - 属性: history={hashHistory} 用来监听浏览器地址栏的变化, 并将 URL 解析成一个地址对象，供 React Router 匹配
   - 子组件: route

3. route: 路由组件

   - 属性 1:`path="/xxx"`
   - 属性 2: `component={Xxx}`
   - 根路由组件: `path="/"`的组件, 一般为 App
   - 子路由组件: 子`<Route>`配置的组件

4. IndexRoute: 默认路由

   - 当父路由被请求时, 默认就会请求此路由组件

5. hashHistory

   - 用于 router 组件的 history 属性
   - 作用: 为地址 url 生成`?\_k=hash`, 用于内部保存对应的 state

6. Link: 路由链接

   - 属性 1: `to="/xxx"`
   - 属性 2: `activeClassName="active"`

### <a id="four-five" class='part-part'>4.5 react-router 的基本使用</a>

1. 下载

```
npm install react-router --save
```

2. 定义各个路由组件

```
1. About.js
    import React from 'react'
    function About() {
        return <div>About组件内容</div>
    }
    export default About
2. Home.js
    import React from 'react'
    function Home() {
        return <div>Home组件内容2</div>
    }
    export default Home
3. Repos.js
    import React, {Component} from 'react'
    export default class Repos extends Component {
    render() {
        return (
            <div>Repos组件</div>
        )
    }
    }
4. App.js
import React, {Component} from 'react'
import {Link} from 'react-router'

export default class App extends Component {
    render() {
    return (
        <div>
            <h2>Hello, React Router!</h2>
            <ul>
                <li><Link to="/about" activeClassName="active">About2</Link></li>
                <li><Link to="/repos" activeClassName="active">Repos2</Link></li>
            </ul>
            {this.props.children}
        </div>
    )
    }
}
```

3. index.js: 注册路由, 渲染路由器标签

```
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Home from './modules/Home'

render((
    <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/about" component={About}></Route>
        <Route path="/repos" component={Repos}></Route>
    </Route>
    </Router>
), document.getElementById('app'))
```

### <a id="four-six" class='part-part'>4.6 向路由组件传递请求参数</a>

1. repo.js: repos 组件下的分路由组件

```
import React from 'react'
export default function ({params}) {
let {username, repoName} = params
    return (
        <div>用户名:{username}, 仓库名:{repoName}</div>
    )
}
```

2. repos.js

```
import React from 'react'
import NavLink from './NavLink'

export default class Repos extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
        repos: [
        {username: 'faceback', repoName: 'react'},
        {username: 'faceback', repoName: 'react-router'},
        {username: 'Angular', repoName: 'angular'},
        {username: 'Angular', repoName: 'angular-cli'}
        ]
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit () {

    const repos = this.state.repos
    repos.push({
        username: this.refs.username.value,
        repoName: this.refs.repoName.value
    })
    this.setState({repos})
    this.refs.username.value = ''
    this.refs.repoName.value = ''
    }

    render() {
    return (
        <div>
        <h2>Repos</h2>
        <ul>
            {
            this.state.repos.map((repo, index) => {
                const to = `/repos/${repo.username}/${repo.repoName}`
                return (
                <li key={index}>
                    <Link to={to} activeClassName='active'>{repo.repoName}</Link>
                </li>
                )
            })
            }
            <li>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="用户名" ref='username'/> / {' '}
                <input type="text" placeholder="仓库名" ref='repoName'/>{' '}
                <button type="submit">添加</button>
            </form>
            </li>
        </ul>
        {this.props.children}
        </div>
    );
    }
}
```

3. index.js: 配置路由

```
<Route path="/repos" component={Repos}>
    <Route path="/repos/:username/:repoName" component={Repo}/>
</Route>
```

### <a id="four-seven" class='part-part'>4.7 优化 Link 组件</a>

1. NavLink.js

```
import React from 'react'
import {Link} from 'react-router'
export default function NavLink(props) {
    return <Link {...props} activeClassName="active"/>
}
```

2. Repos.js

```
<NavLink to={to}>{repo.repoName}</NavLink>
```

### 总结

- 参考文档：[React-Router 中文文档](http://react-guide.github.io/react-router-cn/docs/Introduction.html)
- 参考文档：[react-admin完整项目](https://github.com/marmelab/react-admin)