const queue =[]
//fifo 线性
const peek=queue[0]
const pop=queue.shift()
const push=(item)=>queue.push(item)
const size=queue.length
const isEmpty=()=>size===0