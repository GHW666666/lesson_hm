var a="1" //值决定
a=Number(a)
b=new Number(a)
console.log(typeof a,typeof b,a,b)
console.log(b.toFixed(2),a.toFixed(2))
console.log(Boolean())
console.log(Boolean(false))
console.log(Boolean(true))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(+0),'+0')
console.log(Boolean(-0),'-0')
console.log(Boolean(NaN),'NaN')
console.log(Boolean(''),'')
console.log(1/+0)
console.log(1/-0)
console.log(Object.is(5,5))
//NaN Not a Number
console.log(2*'a')//仔细想想为什么
console.log(typeof NaN)
console.log(parseInt('abc'))
console.log(parseInt('12 abc'))
console.log(Number('12 abc'))
console.log(Number('abc'))
console.log(NaN===NaN)
console.log(isNaN(NaN),isNaN(parseInt('abc')))

