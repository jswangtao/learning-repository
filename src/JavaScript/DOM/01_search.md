- DOM操作
	- DOM查询
	- 在网页中浏览器已经为我们提供了document对象，
		它代表的是整个网页，它是window对象的属性，可以在页面中直接使用。
	- document查询方法：
		- 根据元素的id属性查询一个元素节点对象：
			- document.getElementById("id属性值");
		- 根据元素的name属性值查询一组元素节点对象:
			- document.getElementsByName("name属性值");
		- 根据标签名来查询一组元素节点对象：
			- document.getElementsByTagName("标签名");
		- 通过具体的元素节点来查询
			- 元素.getElementsByTagName()
			- 通过标签名查询当前元素的指定后代元素
		- 元素.childNodes
			- 获取当前元素的所有子节点
			- 会获取到空白的文本子节点
		- 元素.children
			- 获取当前元素的所有子元素
		- 元素.firstChild
			- 获取当前元素的第一个子节点
		- 元素.lastChild
			- 获取当前元素的最后一个子节点
		- 元素.parentNode
			- 获取当前元素的父元素
		- 元素.previousSibling
			- 获取当前元素的前一个兄弟节点
		- 元素.nextSibling
			- 获取当前元素的后一个兄弟节点
			
	    - innerHTML和innerText
		    - 这两个属性并没有在DOM标准定义，但是大部分浏览器都支持这两个属性
		    - 两个属性作用类似，都可以获取到标签内部的内容，
			  不同是innerHTML会获取到html标签，而innerText会自动去除标签
		    - 如果使用这两个属性来设置标签内部的内容时，没有任何区别的	
		
	    - 读取标签内部的文本内容
			```
		    <h1>h1中的文本内容</h1>
		    元素.firstChild.nodeValue
			```
	    - document对象的其他的属性和方法
		    - document.all
			    - 获取页面中的所有元素，相当于document.getElementsByTagName("*");
			
		    - document.documentElement
			    - 获取页面中html根元素
			
		    - document.body
			    - 获取页面中的body元素
			
		    - document.getElementsByClassName()
			    - 根据元素的class属性值查询一组元素节点对象
			    - 这个方法不支持IE8及以下的浏览器
			
		    - document.querySelector()
			    - 根据CSS选择器去页面中查询一个元素
			    - 如果匹配到的元素有多个，则它会返回查询到的第一个元素	
			
		    - document.querySelectorAll()	
			    - 根据CSS选择器去页面中查询一组元素
			    - 会将匹配到所有元素封装到一个数组中返回，即使只匹配到一个