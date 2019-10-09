- JavaScript负责页面中的的行为。
	- 它是一门运行在浏览器端的脚本语言。
	- JS的编写的位置
		1.可以编写到标签的指定属性中
			<button onclick="alert('hello');">我是按钮</button>
			<a href="javascript:alert('aaa');">超链接</a>
			
		2.可以编写到script标签中   *****
			<script type="text/javascript">
				//编写js代码
			</script>
			
		3.可以将代码编写到外部的js文件中，然后通过标签将其引入 *****
			<script type="text/javascript" src="文件路径"></script>
			
	- 输出语句
		- alert("要输出的内容");
			- 该语句会在浏览器窗口中弹出一个警告框
			
		- document.write("要输出的内容");
			- 该内容将会被写到body标签中，并在页面中显示
			
		- console.log("要输出的内容");
			- 该内容会被写到开发者工具的控制台中
			
	- 基本的语法
		- 注释
			- 单行注释
				//注释内容
			- 多行注释
				/*
					注释内容
				*/
				
		- JS严格区分大小写	
		- JS中每条语句以分号(;)结尾
		    用熟后可以看情况使用，在以  “(”       “[”    “/ ”     “+”     “-”    作为行首必须加分号                                                              
		- JS中会自动忽略多个空格和换行，所以我们可以利用空格和换行对代码进行格式化。
		
	
