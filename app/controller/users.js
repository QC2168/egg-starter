const Controller = require('egg').Controller;
class UsersController extends Controller {
  async create() {
    const { ctx } = this;
    ctx.model.Users.create({
      username: '_island',
      email: 'example@example.com',
      password: 'h9nUQ92B'
    });
    ctx.body = {
      message: '创建成功'
    };
  }
}
module.exports = UsersController;
