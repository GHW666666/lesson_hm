# vue 全家桶之vue-router
- vue 语法
组件(vue2选项式/vue3组合式 适合大型项目)，响应式，生命周期，指令(v-bind:,v-model,
v-if/v-show,v-for)，三种数据(ref,props,computed)
- vue-router 路由
- vuex/pinia 状态管理
- vue-router 路由 vue周边生态

## vue-router
- 将接管路由
- router-link取代a标签，好处，路由对应的组件显示到对应位置
要启用
组件没有生效，无法识别组件，但文字能看见，降级成为div元素
- 向vue添加vue-router插件
- router 专门的目录
  - index.js入口配置文件
- router 专门的目录
  - index.js入口配置文件
  - router-link是vue-router提供的组件
- vue-router 语法细节
 - routes 拆分亮点
 [
  /
  /About
  ...users//用户模块
  ...posts//文章模块
 ]
 - path,component
   - name 有用
   - props 路由传参

- 路由历史记录history
  router-link组件不是a标签，栈顶是当前路由，显示组件