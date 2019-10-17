- 元素的属性：
	- 读取元素的属性：
		- 语法：元素.属性名
		- 例子：
			```
			ele.name  
			ele.id  
			ele.value 
			ele.className
			``` 
	- 修改元素的属性：
		语法：元素.属性名 = 属性值
		
	- innerHTML
		- 使用该属性可以获取或设置元素内部的HTML代码

	- document.createElement()
		- 可以根据标签名创建一个元素节点对象
		
	- document.createTextNode()
		- 可以根据文本内容创建一个文本节点对象
		
	- 父节点.appendChild(子节点)
		- 向父节点中添加指定的子节点
		
	- 父节点.insertBefore(新节点,旧节点)
		- 将一个新的节点插入到旧节点的前边
		
	- 父节点.replaceChild(新节点,旧节点)
		- 使用一个新的节点去替换旧节点
		
	- 父节点.removeChild(子节点)
		- 删除指定的子节点
		- 推荐方式：子节点.parentNode.removeChild(子节点)
	
- DOM对CSS的操作
	- 读取和修改内联样式
		- 使用style属性来操作元素的内联样式
		- 读取内联样式：
			语法：元素.style.样式名
			- 例子：
				元素.style.width
				元素.style.height
				- 注意：如果样式名中带有-，则需要将样式名修改为驼峰命名法
					将-去掉，然后-后的字母改大写
				- 比如：background-color --> backgroundColor
						    border-width ---> borderWidth
					
	- 修改内联样式：
		语法：元素.style.样式名 = 样式值
		- 通过style修改的样式都是内联样式，由于内联样式的优先级比较高，
			所以我们通过JS来修改的样式，往往会立即生效，
			但是如果样式中设置了!important，则内联样式将不会生效。
			
    - 读取元素的当前样式
	    - 正常浏览器
		    - 使用getComputedStyle()
		    - 这个方法是window对象的方法，可以返回一个对象，这个对象中保存着当前元素生效样式
		    - 参数：
			    1. 要获取样式的元素
			    2. 可以传递一个伪元素，一般传null
		    - 例子：
			    获取元素的宽度
				    getComputedStyle(box , null)["width"];
		    - 通过该方法读取到样式都是只读的不能修改

	    - IE8
		    - 使用currentStyle
		    - 语法：
			    元素.currentStyle.样式名
		    - 例子：
			    box.currentStyle["width"]
		    - 通过这个属性读取到的样式是只读的不能修改

        - 其他的样式相关的属性
	        注意：以下样式都是只读的

	        - clientHeight
		        - 元素的可见高度，指元素的内容区和内边距的高度
	        - clientWidth
		        - 元素的可见宽度，指元素的内容区和内边距的宽度
	        - offsetHeight
		        - 整个元素的高度，包括内容区、内边距、边框
	        - offfsetWidth
		        - 整个元素的宽度，包括内容区、内边距、边框
	        - offsetParent
		        - 当前元素的定位父元素
		        - 离他最近的开启了定位的祖先元素，如果所有的元素都没有开启定位，则返回body
	        - offsetLeft offsetTop
		        - 当前元素和定位父元素之间的偏移量
		        - offsetLeft水平偏移量  offsetTop垂直偏移量
	        - scrollHeight scrollWidth
		       - 获取元素滚动区域的高度和宽度
	        - scrollTop scrollLeft
		        - 获取元素垂直和水平滚动条滚动的距离
	        - 判断滚动条是否滚动到底
		        - 垂直滚动条
			        scrollHeight - scrollTop = clientHeight
		        - 水平滚动	
			        scrollWidth - scrollLeft = clientWidth