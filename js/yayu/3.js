function Person(name, age) {
    this.name = name;
    this.age = age;
    Person.prototype.say = function () {
      console.log(`${this.name}`);
  }
}
  
  Person('昌总', 19)//普通函数运行,this的指向跟据环境运行,浏览器端this指向window，node端this指向global，严格模式下this指向undefined
  const person1 = new Person('昌', 19)//构造函数运行
  const person = new Person('昌总', 19)
  person1.say()


  