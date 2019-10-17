- 在JS中为我们提供了三个包装类：Number() String() Boolean() 
	- 通过这三个包装类可以创建基本数据类型的对象
	例子：
		```
		var num = new Number(2);
		var str = new String("hello");
		var bool = new Boolean(true);
		```
	- 但是在实际应用中千万不要这么干。
	
	- 当我们去操作一个基本数据类型的属性和方法时，
		解析器会临时将其转换为对应的包装类，然后再去操作属性和方法，
		操作完成以后再将这个临时对象进行销毁。

			
		
		