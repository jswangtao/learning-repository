function deepCopy(obj1) {
  var obj2 = Array.isArray(obj1) ? [] : {};
  if (obj1 && typeof obj1 === "object") {
    for (var i in obj1) {
      var prop = obj1[i]; // 避免相互引用造成死循环，如obj1.a=obj
      if (prop == obj1) {
        continue;
      }
      if (obj1.hasOwnProperty(i)) {
        // 如果子属性为引用数据类型，递归复制
        if (prop && typeof prop === "object") {
          obj2[i] = (prop.constructor === Array) ? [] : {};
          arguments.callee(prop, obj2[i]); // 递归调用
          console.log(arguments.callee);
        } else {
          // 如果是基本数据类型，只是简单的复制
          obj2[i] = prop;
        }
      }
    }
  }
  return obj2;
}
var obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 3
  }
}
var obj2 = deepCopy(obj1);
obj2.a = 3;
obj2.c.d = 4;
console.log(obj1.a); // 1
console.log(obj2.a); // 3
console.log(obj1.c.d); // 3