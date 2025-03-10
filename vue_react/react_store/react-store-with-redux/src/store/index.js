//创建仓库
// 只有一个库 树状结构
//count 融入
import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./count.js";

const rootReducer = {
  counter: counterSlice.reducer,

}
const store = configureStore({
   reducer: rootReducer,
})

export default store; 