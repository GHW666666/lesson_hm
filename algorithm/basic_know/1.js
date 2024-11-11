//我们来看看这段代码的T(n)
let n=0;// n=1
for(let i=0;i<n;i++){ //1+（n+1）+ n 
    console.log(n);//n
}
//T(n)=3n+3 O(n)=n即n趋于无穷大

function traverse(arr) {
    const outLen = arr.length// 1
    for (let i = 0; i < outLen; i++) { //1+（n+1）+ n
      const inLen = arr[i].length// 1*n
      for (let j = 0; j < inLen; j++) {// (1+（n+1）+ n)*n
        console.log(arr[i][j])      // n*n
      }
    }
  }//T(n)=3n^2+5n+36 
const arr=new Array(7).fill(1);
console.log(arr);