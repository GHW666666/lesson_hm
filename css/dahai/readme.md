# css底层基础
//css规则
h1{//选择器
    color:red;//声明
    text-align:center;//声明
}

- css//层叠样式表

 - css依附于html dom
 - html dom也不能独立存在

-css如何引入
 - style 内联样式
 - link 外部样式
 - 行内样式（标签内声明）

-为什么css要放在头部
 先下载样式再解析dom,这样就不会先看到很乱的文档再看到样式
 dom + css=render tree（显示页面 数据结构）->浏览器渲染->页面显示 根节点body

- css优先级是什么
 - 从小到大 计算规则
 *10
 标签 1 类名 10 id 100 行内样式 1000 !important 最大
 - 当选择器复杂时优先加法
  .container ul li:nth-child(odd) 10+1+1+10=22 选择最后的元素

- css选择器分为几类
 -基础选择器
  - 标签选择器
  - 类选择器
  - id选择器
  - 通配符选择器 *性能不好
 - 组合选择器
  - 后代选择器 空格
  - 子代选择器 >
  - 相邻兄弟选择器 +
  - 通用兄弟选择器 ~
- 伪类选择器
 -button : active 可交互状态
 -button : focus
 -伪元素选择器
 -属性选择器
