//js两种模块化方案 commonjs--require和es6 module export
const Koa =require('koa');
const app = new Koa();
const fs = require('fs');//node 内置模块 文件
//fs 模块读取文件流

const main = ctx => {
    ctx.response.type = 'html';// 设置响应头为html类型
    ctx.body = fs.createReadStream('./index.html');// 读取文件流

    // ctx.response.body = 'Hello World';
}
app.use(main)
app.listen(3000)
