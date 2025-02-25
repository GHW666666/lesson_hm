//service服务 sql服务
'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async user() {
    // const user = await this.app.mysql.query('select * from user');
    // return user;
    return {
        name: 'ghw',
        age: 18,
        sex: '男',
    };
  }
}
module.exports= HomeService;