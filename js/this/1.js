// var x=2;
let x = 2;

var obj={
    x:1,
    foo: function() {
        
        console.log(this.x)
    }
   
}
var foo=obj.foo;
//相同：同一个函数在不同的环境下执行，结果是一样的
//不同：函数的执行环境不同，调用方式不同
//调用方式，对象属性
obj.foo()
//调用方式，普通函数
foo()
console.log(s)

