console.log(name);
function sayHello(){
let name = "g";
for(let i = 0;i < 2;i++){
    console.log("Hello " + name + ".");
}

}
//es5 var全局变量声明
var age = 25;
if(age > 5){
    //es6新增的let 变量声明 2015年
    var name = "Y";
    let dogyears = age * 7;
    console.log("Y.");
}
//代码块，块级作用域
sayHello();
console.log(name,"name");

