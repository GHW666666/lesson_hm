const cy={
    name:"cy",
    age:17,
    playBasketball:function(){
        console.log(this.name+" is playing basketball");
    }
}
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype = cy;
const wu = new Person('Yu', 23);
wu.playBasketball()
