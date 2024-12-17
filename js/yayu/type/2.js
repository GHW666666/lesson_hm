//number
console.log(Number());
// NaN undefined 数值上下文没有转成一个特定数字的含义
console.log(Number(undefined))
console.log(Number(null))//为什么null与undefined不一样

console.log(Number(false))
console.log(Number(true))
console.log(Number("123"))
console.log(Number("0x123"))
console.log(Number("-123.45"))
console.log(Number(""),Number(''))
console.log(Number('123abc'))
console.log(0/0)
console.log([-0].indexOf(+0));
console.log(+0===-0);
console.log(Object.is(+0,-0));