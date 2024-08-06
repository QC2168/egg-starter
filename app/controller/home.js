const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  /**
  * #swagger-api
  *
  * @function demo
  * @description #tags Demo
  * @description #parameters id path string true - parameter id
  * @description #responses 200 schema.demo - demo模型
  * @summary 测试-返回demo模型
  */
  async demo() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
