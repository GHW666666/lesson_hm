function Persin(name,age){
    this.name=name;
    this.age=age;
}
Persin.prototype.sayName=function(){
    console.log(this.name);
}
//new实例化对象
//1.实例化空对象{}与Person没有关系
//2.将空对象的__proto__=>Person的prototype
//3.将this指向实例对象
