function Person(){

}
function Person1(){
  this.name = "tom";
  this.age = 3;
}
Object1=new Object();

p=new Person();

console.log(p.__proto__.constructor);
//p.__proto__=Person1;
//console.log(p.__proto__);

