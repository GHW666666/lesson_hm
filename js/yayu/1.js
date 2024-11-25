// 对象字面量
let cao={
    name:"cao"
}
const fan={
    name:"fan",
    age:17
}
//es6才有class
class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    say(){
        console.log("say")
    }
}
let p=new Person("cao",17)
let p2=new Person("cao2",16)
fan.name="fan2"
console.log(fan.name)
fan.name=cao.name
console.log(fan.name)