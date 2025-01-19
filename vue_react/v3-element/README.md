- 如何开发一个vue项目

- vite负责工程化构建项目
- vue核心语法(响应式，组件化，指令)
- vue-router路由
- pinia状态管理
- element3 ui组件库
- stylus
- axios ajax请求封装库
- app.use()
  - 注册插件
  element的组件可以全局使用 router-link也是全局组件
  - 注意问题
   element组件以el-开头，不要重复造轮子
   性能问题，首页加载过多组件，打包体积过大 解决：按需引入

   ## 项目亮点
   - 按需加载vue组件库element3，性能优化，页面加载速度快
   - 项目全面使用es6+风格
   - 二级路由 
   - path,component,name,children,meat