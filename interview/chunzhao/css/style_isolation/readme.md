# 样式隔离
是指在**组件**开发中，确保每个组件的样式不会影响其他组件

- vue中的 
  单文件scoped(SFC) 样式隔离
  实现原理 属性选择器 给组件添加一个唯一的data-v-hash
 <div class='example' data-v-f3f3eg9></div>
 .example[data-v-f3f3eg9] { color: red; }
 - vue中可以通过>>>实现***嵌套样式隔离*** 
 - vue也支持css module 
- css module css

## 总结
- 样式隔离 再点文件中实现 避免全局污染 主要是通过属性选择器和动态生成类名(加哈希串)来实现vue中使用scoped,当然也支持module 还支持>>>deep嵌套选择器 react通过module.css实现隔离 其中 css in js 也是一种实现方式 并带来了组件化的创意

## css
- 怎么实现
- css3 新特性