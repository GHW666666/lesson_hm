const Koa = require('koa');
const app=new Koa();
//jwt token
// cookie 早期的一个web技术，用于存储用户信息
const main=function(ctx){
    const n=Number(ctx.cookies.get('view')||0)+1
    ctx.cookies.set('view',n)
    ctx.response.body=n+' views'
}

app.use(main)
app.listen(3000)