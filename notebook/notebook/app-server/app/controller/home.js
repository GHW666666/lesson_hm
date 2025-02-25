const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { id } = ctx.query;
    ctx.body = `hi, egg111${id}`;
  }
  async user() {
    const { ctx } = this;
    const { id } = ctx.params;
    //调用service层 把数据查询交给服务层
    const { name,age,sex } = await ctx.service.home.user();
    ctx.body = `hi, ${id,name,age,sex}`;
  }
  async add() {
    const { ctx } = this;
    //请求体
    const { title } = ctx.request.body;
    ctx.body = {
      title
    };
  }
}

module.exports = HomeController;
