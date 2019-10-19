  async函数(源自ES2017)
  - 概念： 真正意义上去解决异步回调的问题，同步流程表达异步操作
  - 本质： Generator的语法糖
  - 语法：
      ```
      async function foo(){
        await 异步操作;
        await 异步操作；
      }
      ```
  - 特点：
    1. 不需要像Generator去调用next方法，遇到await等待，当前的异步操作完成就往下执行
    2. 返回的总是Promise对象，可以用then方法进行下一步操作
    3. async取代Generator函数的星号*，await取代Generator的yield
    4. 语意上更为明确，使用简单，经临床验证，暂时没有任何副作用
 ![async01](./images/async01.png) 
 ![async02](./images/async02.png) 
    
    
    