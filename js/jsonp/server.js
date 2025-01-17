//http 服务启动
// commonjs模块规范node早期 引入http模块
const http=require('http');
const user=[
    {
    id:1,
    name:'张三'
    },
    {
    id:2,
    name:'李四'
    }]
const server=http.createServer((req,res)=>{
    //异步回调 
    //当请求来到服务器后，该函数会被执行 req请求对象被解析，res响应对象被创建 http结束

    //发送响应体
    res.end('callback('+JSON.stringify(user)+')');
});

server.listen(3000,()=>{
    console.log('服务已启动，端口号：3000');
});