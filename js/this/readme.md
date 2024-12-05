# 深入this
this 函数运行环境指针
- 看透内存，迎刃而解（栈，堆）
- 少了一个指向函数调用的指针--this,所以谁调用这个函数，this指向谁
- 普通函数被调用 全局this指向window
- 如果启动严格模式，this为undefined
- 用对象调用，this指向对象
- new构造函数this指向实例化后的对象
- 指定this调用方式