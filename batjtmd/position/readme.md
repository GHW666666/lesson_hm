# 文档流
- 盒子的顺序：文档流
- 盒子的大小box=内容（width+height ）+内边距padding+外边距border+外边距margin
- 盒子的位置：文档流，从上到下，从左到右

## position的属性和原理
- 静态属性：static，默认值
- 相对定位：relative，  当元素的 position 属性设置为 relative 时，元素会相对于其在正常文档流中的位置进行定位。这意味着你可以使用 top、right、bottom、left 属性来移动元素，但其原来的空间仍会保留在文档流中，就像它从未移动过一样。其他元素会填补其留下的空白。
- 绝对定位：absolute，相对于第一个非static的父元素进行移动 当元素的 position 属性设置为 absolute 时，元素会相对于最近的已定位祖先元素（即 position 属性为 relative、absolute、fixed 或 sticky 的元素）进行定位。如果没有已定位的祖先元素，那么它会相对于 <html> 元素进行定位。元素的位置通过 top、right、bottom、left 属性来指定。此时，元素会从文档流中移除，不会保留原来的位置。
- 固定定位：fixed，相对于浏览器窗口进行移动
