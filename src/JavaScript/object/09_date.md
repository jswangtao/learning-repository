Date
	- 日期的对象，在JS中通过Date对象来表示一个时间
	- 创建对象
		- 创建一个当前的时间对象
			var d = new Date();
		- 创建一个指定的时间对象
			var d = new Date("月/日/年 时:分:秒");
			
	- 方法：
		getDate()
			- 当前日期对象是几日（1-31）
			
		getDay() 
			- 返回当前日期对象时周几（0-6）
				- 0 周日
				- 1 周一 。。。
				
		getMonth()
			- 返回当前日期对象的月份（0-11）
			- 0 一月 1 二月 。。。
		getFullYear() 从 Date 对象以四位数字返回年份。 
		
		getHours() 返回 Date 对象的小时 (0 ~ 23)。 
		getMinutes() 返回 Date 对象的分钟 (0 ~ 59)。 
		getSeconds() 返回 Date 对象的秒数 (0 ~ 59)。 
		getMilliseconds() 返回 Date 对象的毫秒(0 ~ 999)。 
		
		getTime()
			- 返回当前日期对象的时间戳
			- 时间戳，指的是从1970年月1日 0时0分0秒，到现在时间的毫秒数
				计算机底层保存时间都是以时间戳的形式保存的。
				
		Date.now()
			- 可以获取当前代码执行时的时间戳
