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
   - 良好的代码注释规范,可读性好，良好的git提交记录
   - 二级路由 
   - path,component,name,children,meat
   - 路由懒加载()=>import('../pages/Home.vue')
   前端用户体验最佳体验是快
   所以按需加载页面级别组件 函数引入方式
   - 路由守卫
- 表单组件
 - :model="form"搜集表单数据
 - ref获取表单实例
  - 有时要获取dom元素，组件对象
  - 先用ref标记组件
   - eg<el-form
      style="position:absolute;left: 45%;"
      ref="formRef"
      :model="form"
      :rules="rules"
      label-width="auto"
      @validate="handleValidate"
     >
  - const formRef = ref(null)
   - 挂在前为bull
  - 表单的校验
   - rules
   - validate方法 
- web 应用
 http协议 基于请求加响应
 - 会话session
 - cookie
- 登录流程
 - 前端提交登录
  - login.vue组件化表单
  - 调用api/login.js接口
  - 统一的axios实例发送请求  
- 后端模拟
 - mock

- jwt 登录
 - npm install jsonwebtoken

- vitejs启用viteMockServe插件
- 模拟登录接口
- mock文件模拟后端接口
- api封装axios
- 前端组件onMounted生命周期 发送接口请求

- 验证用户身份接口
- token再localStorage 
?token=${token} 携带token
- 请求头 Authorization 