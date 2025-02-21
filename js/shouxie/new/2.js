function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.sayName=function(){
    console.log(this.name);
}

function objectFaction(){
  const obj=new Object()
  const Constructor=[].shift.call(arguments);
  obj.__proto__=Constructor.prototype;
  Constructor.apply(obj,arguments);
  return obj
}
const s=objectFaction(Person,ghw,21);