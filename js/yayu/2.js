function Person(name, age) {
    this.name = name;
    this.age = age;
}
p1=new Person("John", 30);
console.log(p1.__proto__===Person.prototype);
console.log(Person.prototype.constructor);
console.log(p1.prototype);