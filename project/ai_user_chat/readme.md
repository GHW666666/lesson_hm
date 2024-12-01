#  ai全站项目
- 架构
 - frontend 前端
 - backend 后端
 - llm ai sever
 - 数据接口 user.json
   http:localhost:3000/user  json-server
   - npm i json-server 
     - http server 响应本地请求 localhost:3000
     - json 文件 json-server 这个包启动web 服务 --watch user.json监听user.json文件的变化
   - 放在script标签
     "dev": "json-server --watch user.json -p 3000"
   - 启动命令 npm run dev