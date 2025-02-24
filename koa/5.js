const Koa=require('koa')
const app=new Koa()
const fs=require('fs')//引入fs模块

const fsPromise=fs.promises

const main=async ctx=>{
    ctx.response.type='html'
    //回调解决异步问题
    console.log(fs.readFileSync('./index.html',()=>{}))
    //异步读取文件 等到文件读取完成 再返回结果给客户端
    ctx.body=await fsPromise.readFile('./index.html','utf8')
}
app.use(main)
app.listen(3000)