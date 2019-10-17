- 函数（Function）	
	- 函数也是一个对象，也具有普通对象的功能
	- 函数中可以封装一些代码，在需要的时候可以去调用函数来执行这些代码
	- 使用typeof检查一个函数时会返回function
	- 创建函数
		- 函数声明
			```
			function 函数名([形参1,形参2...形参N]){
				语句...
			}
			```
		- 函数表达式
			```
			var 函数名 = function([形参1,形参2...形参N]){
				语句...
			};
			```
	- 调用函数
		- 语法：
			```
			函数对象([实参1,实参2...实参N]);
			fun() sum() alert() Number() parseInt()
			```
		- 当我们调用函数时，函数中封装的代码会按照编写的顺序执行

	- 形参和实参
		- 形参：形式参数
			- 定义函数时，可以在()中定义一个或多个形参，形参之间使用,隔开
				定义形参就相当于在函数内声明了对应的变量但是并不赋值，
				形参会在调用时才赋值。
				
		- 实参：实际参数
			- 调用函数时，可以在()传递实参，传递的实参会赋值给对应的形参,
				调用函数时JS解析器不会检查实参的类型和个数，可以传递任意数据类型的值。
				如果实参的数量大于形参，多余实参将不会赋值，
				如果实参的数量小于形参，则没有对应实参的形参将会赋值undefined
	
	- 返回值，就是函数执行的结果。
		- 使用return 来设置函数的返回值。
		- 语法：return 值;
			- 该值就会成为函数的返回值，可以通过一个变量来接收返回值
		- return后边的代码都不会执行，一旦执行到return语句时，函数将会立刻退出。
		- return后可以跟任意类型的值，可以是基本数据类型，也可以是一个对象。
		- 如果return后不跟值，或者是不写return则函数默认返回undefined。
		- break、continue和return
			- break
				- 退出循环
			- continue
				- 跳过当次循环
			- return
				- 退出函数   
				- 在函数中return后的语句都不会执行
					```
					function sum(a , b , c){
										var d = a + b + c;
		
										return d;
		
										alert("我不会执行");
		
								//return undefined;  return和不写return都是返回undefined
								//每个函数都有return值，默认return undefined
							}
					```
				
- 立即执行函数
	- 函数定义完，立即被调用，这种函数叫做立即执行函数
	- 立即执行函数往往只会执行一次			
		```
			(function(){
					alert("我是一个匿名函数~~~");
			})()
			匿名函数自调用，闭包
		```
				
	- 参数，函数的实参也可以是任意的数据类型。

	- 方法（method）
		- 可以将一个函数设置为一个对象的属性，当一个对象的属性是一个函数时，
			我们称这个函数是该对象的方法。
		- 对象.方法名();
		- 函数名();	
		- call() , apply()
		- 这两个方法都是函数对象的方法需要通过函数对象来调用
		- 通过两个方法可以直接调用函数，并且可以通过第一个实参来指定函数中this
		- 不同的是call是直接传递函数的实参而apply需要将实参封装到一个数组中传递
		- 三种方法调用函数
			```
			fun();
			fun.apply();
			fun.call();
			不同之处，可以传一个对象进去，指定this
			fun.call(obj,2,3);
			fun.apply(obj,[2,3]);
			```
		- arguments
			- arguments和this类似，都是函数中的隐含的参数
			- arguments是一个类数组元素，它用来封装函数执行过程中的实参
				所以即使不定义形参，也可以通过arguments来使用实参
			- arguments中有一个属性callee表示当前执行的函数对象

-  构造函数
	- 构造函数是专门用来创建对象的函数
	- 一个构造函数我们也可以称为一个类
	- 通过一个构造函数创建的对象，我们称该对象时这个构造函数的实例（通过instanceof检测是否是该函数的实例）
	- 通过同一个构造函数创建的对象，我们称为一类对象
	- 构造函数就是一个普通的函数，只是他的调用方式不同，构造函数习惯上首字母大写
		如果直接调用，它就是一个普通函数
		如果使用new来调用，则它就是一个构造函数
		
	- 例子：
		```
		function Person(){
		
		}
		```
		```
		//构造函数通常首字母大写，提醒我们用new调用函数，当成构造函数创建对象
		function Person(name , age , gender){
			this.name = name;
			this.age = age;
			this.gender = gender;
			this.sayName = function(){
				alert(this.name);
			};
		}				
		var per = new Person("孙悟空",18,"男");
		```

	- 构造函数的执行流程：
		1. 创建一个新的对象
		2. 将新的对象作为函数的上下文对象（this）
		3. 执行函数中的代码
		4. 将新建的对象返回
		
	- instanceof 用来检查一个对象是否是一个类的实例
		- 语法：对象 instanceof 构造函数
			- 如果该对象时构造函数的实例，则返回true，否则返回false
			- Object是所有对象的祖先，所以任何对象和Object做instanceof都会返回true
				```
				//console.log(per instanceof Person);      true
				//console.log(per instanceof Object);		   true
				//console.log(dog instanceof Person);     false
			  ```

	- 枚举对象中的属性:for...in
	- 语法：
		```
		for(var 属性名 in 对象){
		
		}
		for...in语句的循环体会执行多次，对象中有几个属性就会执行几次，
			每次将一个属性名赋值给我们定义的变量，我们可以通过它来获取对象中的属性
		```
		
				