const Koa = require('koa');
const app=new Koa();
const route=require('koa-route');

const redirect=ctx=>{
ctx.response.redirect('/')
}
//重定向的本质是设置302状态码和Location头
const main = ctx => {
 ctx.body = 'Hello World';
};

app.use(route.get('/',main))
app.use(route.get('/redirect',redirect))
app.listen(3000);