'use strict'; // 使用全局严格模式
const Controller = require('egg').Controller;

class PostController extends Controller {
    // 继承基类
    async index() {
        // this 指向当前控制器上下文（controller）的实例对象
        const { ctx } = this; // 解构获取 ctx

        // 使用解构后的 ctx 变量
        ctx.body = '文章列表';
    }
}
module.exports = PostController;