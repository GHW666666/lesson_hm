# 定时器
- setTimeout 异步，会在主线程执行完之后才会执行
  callback 回调函数 会放入一个专门的地方（event loop），同步函数执行完后再去那里找 ，时间（ms）
- 一定会在指定时间后执行吗?
- 找回？
  执行的是回调函数，定时器id
- 如何setTimeout 实现setInterval
  - 场景编程题
  - 手写题 fn
    - callback time
    - 递归