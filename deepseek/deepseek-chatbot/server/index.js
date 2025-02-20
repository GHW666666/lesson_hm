// commonjs
// node 最简单的后端框架
const koa = require('koa');
// 实例化
const app = new koa(); // 也是应用
const Router = require('koa-router'); // 路由
const router = new Router(); // 实例化
const axios = require('axios'); // 
//middleware 中间件 拦截器设置在请求之前执行，拦截器
const bodyParser = require('koa-bodyparser'); // 解析请求体的中间件

app.use(async(ctx,next) => {
    console.log('中间件拦截器执行了')
    ctx.set('Access-Control-Allow-Origin', '*'); // 解决跨域问题
    ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // 解决跨域问题
    ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type');
    
    if (ctx.method === 'OPTIONS') {
        ctx.status = 204;
        return;
      // 跨域预检请求，直接返回204
    }
    await next(); // 执行下一个中间件拦截器
})
app.use(bodyParser()); // 解析请求体的中间件

// 新建 / 路由
router.get('/', async (ctx) => {
  // 响应体
  // ctx 这一次请求响应的上下文 包含request response 对象

  ctx.body = `
    <html>
      <head>
        <title>chatbot</title>
      </head>
      <body>
        <h1>chatbot</h1>
      </body>
    </html>
  `;
})

// 新建一个叫做 chatai 的路由 
//  method, url 
// post 
// 后端 api 接口数据 json 
// nest.js 
// 前端react axios 向 /chatai 发送post 请求
router.post("/chatai", async (ctx) => {
  // 前端 input 传过来的内容 message 
  // 向ollama ：11434/api/chat 发送 post 请求
  // chatgpt 行业标准
console.log(ctx.request.body);
  const message = `${ctx.request.body.message}`;
  const data = {
    model: "deepseek-r1:1.5b", // 必须制定
    messages: [
      {
        role: "user",
        content: message
      }
    ],
    stream: false
  }

  // axios 发送请求就用它 转发请求
  // AI 能力集成
  const response = await axios
    .post("http://localhost:11434/api/chat", data)
    .then(response => {
      console.log(response.data);
    })


  ctx.body = {
    code: 200,
    message:'<h1>response.data.message.content<h1 />'
  }
})
// 路由的挂载app
app.use(router.routes())

app.listen(3000, () => {
  console.log("server is running at port 3000");
})