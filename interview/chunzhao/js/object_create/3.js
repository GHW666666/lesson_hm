const target={a:1,b:2,c:3}
const source={d:4,e:5}
const res=Object.assign({},target,source)
console.log(res,res.__proto__,target,source)
