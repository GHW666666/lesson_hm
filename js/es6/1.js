let str='hello'
let arr=str.split('')
// ...展开运算符 spread 字符数组
console.log([...arr])
var arr1=[]
for(let i=0;i<arr.length;i++){
     arr1.push(arr[i])
}
console.log(arr1)

let { baz } = { foo: 'aaa', bar: 'bbb' };
console.log(baz); // undefined