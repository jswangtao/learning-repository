简化的对象写法
* 省略同名的属性值
* 省略方法的function
* 例如:
  ```
  let x = 1;
  let y = 2;
  let point = {
    x,
    y,
    setX (x) {this.x = x}
  };
  ```
![obj](./images/obj.png)
