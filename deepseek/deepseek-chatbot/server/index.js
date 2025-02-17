//commonjs模块化规范
//vue mjs模块化规范
const koa = require('koa');
const app = new koa();
const Router = require('koa-router');
const router = new Router();
//新建chatai路由 

router.get("/",async (ctx)=>{
    ctx.body = "<h1>hello world<h1 />";
});

router.post("/chatai",async (ctx)=>{
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
});
app.use(router.routes())
app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000');
});