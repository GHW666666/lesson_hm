import { createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice({
  name: 'counter',//切片名称
  initialState: { value: 0 },//初始值
  
  //reducers: 定义了多个reducer函数，用来处理不同类型的action。每个reducer都是一个纯函数，接收当前state和一个action作为参数，返回一个新的state对象。
  reducers: {
    increment(state) {
      state.value++
    },//state 上一个状态 reducer 操作
    decrement(state) {
      state.value--
    },
  }
})
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer