
# 页面渲染规则
- 文档流
   从body开始 从上到下 从左到右
- 盒子(本身)大小 box-sizing border + padding + content 标准盒模型  content-box

IE盒模型 border-box
- 认标签，也可转变display
 - 块级元素 block
 - 行内元素 inline 不能设置宽和高，宽高由内容决定
- display
 - 块级元素 block
 - 行内元素 inline
 * 块级元素为何独占一行，宽度100%?
 html 是第一个BFC元素
   页面显示由html负责 
- Block Formatting Context 块级格式化上下文
 
 BFC（Block Formatting Context，块级格式化上下文）是CSS中的一个重要概念，它决定了元素如何定位、布局以及与其他元素的交互方式。BFC是一个独立的渲染区域，只有块级盒子（block boxes）参与，它包含了浮动元素及清除浮动的元素。

BFC的触发条件
以下情况会创建BFC：

根元素（<html>）

浮动元素（float 不是 none）

定位元素（position 为 absolute 或 fixed）

display 为 inline-block, flex, inline-flex, grid, inline-grid 的元素

overflow 不是 visible 的元素

contain 值为 layout, content 或 paint 的元素

根元素的一个直接子元素，并且该元素为 block、list-item 或 inline-block 类型，并且该元素没有设置 float、position: absolute 或 position: fixed

BFC的特性
内部的Box会在垂直方向，一个接一个地放置。

Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。

每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。

BFC的区域不会与float box重叠。

BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

计算BFC的高度时，浮动元素也参与计算。
- FFC
为何弹性布局打破了BFC规则？
- 因为当弹性布局声明后创造了新的FFC Flex Formating Content(全新的渲染区域)
- GFC 网格布局
# BFC
- html最顶级的BFC
- 沿吧lock level box垂直方向 一个一个放置，宽度100%
- 盒子垂直距离由margin决定
同一个BFC的相邻盒子的margin会发生重叠 大的说了算
- 每个元素与margin左边与包含块的左content接触，即使存在浮动也一样
- BFC区域不会与float box重叠
- 独立渲染区域，不受外界影响
- 计算BFC高度时，浮动元素也参与计算

- 那么我们如何新建一个BFC
  - 设置overflow:hidden 但不能为visible
  - 


如何改变盒子的位置?
- BFC，文档流，层叠上下文，盒模型，css选择器，继承，布局 这些规则为渲染引擎渲染像素(rgb像素点)计算而服务
# 层叠上下文 
- 层叠上下文是html三维概念 发生堆叠 z-index比较在不懂堆叠上下文就是跟据此时的堆叠上下文 ，相同的堆叠上下文就是跟据此时的z-index

为什么创建者要这样设计层叠上下文，而不是每个元素都设计z-index属性，而是特定情况创建层叠上下文
- 因为这样很浪费性能，跟据渲染机制会很浪费性能

- css三种写法
- 行内样式
  优先级最高 
  :style={width:width+'px'}动态样式
- 内嵌样式 
大型项目不方便复用和管理
- 外联样式
  大型项目方便管理，好维护，好复用，
  这段并发请求可以使得渲染引擎高效构建好，页面加载快，用户体验好
- stylus
  stylus css的预编译器
  快速开发css
  npm install -g stylus全局安装
  stylus -w 监听文件 -o 输出文件
- tap 缩进代替css{}


