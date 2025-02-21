Object1 = {
    name:'deng',
    age:18
}
Object2 ={
    name:'ru',
    age:18
}

const Person = function(){

}
Person.prototype = Object1;
const p1 = new Person();
console.log(p1); //deng

console.log(Person.prototype); //deng

Person.prototype = Object2;
console.log(Person.prototype);
//console.log(p1.name); 
console.log(p1.__proto__);

const p=new Person();
console.log(p.name);





