# 浏览器底层原理

- 进程之间可以通信吗
  - 可以 使用IPC

- chrome多进程有哪些
  - 浏览器主进程
    - 负责页面进程，用户交互（事件冒泡，捕获机制），子进程管理（ipc主进程进行调度），存储功能（cookie，localStrong，indexDB）
  - 渲染进程
    - 排版 Webkit/Blink渲染引擎 +v8引擎（js单线程，异步）在这个进程
    A 页面打开的情况下B页面也可以打开 A/B可能崩溃，
    每个tab都是一个渲染进程 运行在沙箱中
  - 插件进程
    flash，chrome extension 安全 
  - GPU进程
    - 为什么要有GPU进程 transform :translate3d(50%,50%,50%)  都习惯使用gpu计算加速
  - 从输入url到页面显示？
    - 浏览器打开启动四个进程 输入url 浏览器主进程 渲染进程 插件进程 GPU进程
    