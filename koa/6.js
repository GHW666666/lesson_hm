const path = require('path');
const Koa = require('koa');
const app=new Koa();
const server = require('koa-static');


const main=server(path.join(__dirname,'static'));
app.use(main)
app.listen(3000);
