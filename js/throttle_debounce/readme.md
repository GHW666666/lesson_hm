- 认识几个url
  url的设计模式 restful api
  - http://localhost:3001/post 列表页的链接
  - http://localhost:3001/post/1 详情页的链接
  - http://localhost:3001/user/1 用户主页链接

- 数据的查询 Read
- 访问资源的方式
  - apiFox 接口文档 -web请求代理
    Get http://localhost:3001/posts 资源路径
    Patch http://localhost:3001/posts/1 
  - 资源 db.json users posts
  - HTTP协议
   method(动作 GET||PATCH修改||POST 新增 ) + url (请求行)+ (请求头)+(请求体)
   - 请求头 Cookie Content-Type:application/json
   - 请求体 数据
- json-server
  - 支持 restful api设计的数据服务器
  - 提供http服务 模拟后端
  - db.json 模拟数据 支持CRUD
- 会设计restful api 接口
  - 需求
   - 新增文章
- 全栈防抖

- 前后端分离 解耦
  - 前端 live-server 5500
    fetch 发送请求  
  - 后端 json-server 3001 
    url 接口路径
  - api
- filter,map
  都是Array.prototype上的方法,所有的数组都可以使用
- filter 
  对数组过滤，回调函数返回true的元素组成新数组
- map 
  对数组中的每个元素进行操作，回调函数返回新的值组成新数组，为什么要回调呢，因为原有数组不能满足需求
- 防抖
  - 将要执行的函数交给一个debounce()的高阶函数去优化
  - 减少执行的次数，只执行最后输入的一次
  - 定时器 本次关掉上一次时间id