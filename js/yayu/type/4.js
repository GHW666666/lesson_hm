console.log([1,2,3].map((x,index,item)=>{
    console.log(x,index,item)
    return parseInt(x,index,item)
}))