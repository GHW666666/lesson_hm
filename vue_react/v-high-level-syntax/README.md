- vue3高级语法
- watch
 - 接受三个参数
 1. 监视的属性名 可以是单纯响应式数据也可以是响应式数组的某一个元素
 2. 监视的回调函数 可以拿到新旧值
 3. 配置项 immediate 立即执行一次回调函数 默认是false
 deep 深度监视，监听对象内部属性的变化
- watchEffect
 - 无需指定监视的属性名，在组件挂载前自动收集响应式依赖
 - 不需要配置deep深度监听，因为会自动收集依赖
 - 无需配置immediate，因为会自动执行
 - 副作用函数执行时机：组件挂载前，依赖的响应式数据发生变化时

- slot 插槽
 - 插在组件的开和关之间
 - 业务组件和插槽组件的父子关系 组件的ui 