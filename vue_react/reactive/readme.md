# 响应式
{{count}}//响应式
let count=ref(0)
count.value++

- 数据业务 value count 包装成响应式对象 ref 被拦截区更新依赖数据的地方
- es5存在 Object.defineProperty(obj,property,function{
    
})