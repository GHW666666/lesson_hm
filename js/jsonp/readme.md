# 跨域
- 运行环境
 - 前端
  浏览器内置v8引擎，运行js代码
 - 后端
  node.js内置v8引擎，运行js代码 借助c++调用系统资源
  为什么node有模块化需求
   - 需要引入各种模块
   - 后端功能复杂，需要模块化
   - 后端mvc架构本身就是模块化概念
   m：model 模型 连接数据库
   v：view 视图 渲染页面模板
   c：controller 控制器 业务逻辑
   - require=》es6 import
- 为什么要学node?
 - node能做后端提升能力
 - 大前端
 - 简单性能好
- cors policy cross-origin resource sharing 跨域资源共享策略 domain 域名+ port 端口号+protocol协议=》origin 源头
 - 安全策略 保护资源不被恶意访问
- 前端安全
 js 限制跨域访问资源
- script 阻塞式加载
- jsonp 解决跨域问题 json with padding(填充)