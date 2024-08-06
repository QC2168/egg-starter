const Controller = require('egg').Controller;
const path = require('path')
const fs = require('fs-extra')
const dayjs = require('dayjs')
const randomString = require('random-string');
class FileController extends Controller {
  /**
* #swagger-api
* @function upload
* @description #tags File
* @description #parameters data body schema.file.request true - 请求参数
* @description #responses 200 schema.file.response - 返回数据类型
* @summary 通用上传文件
*/
  async upload() {
    const { ctx } = this;
    try {
      const file = ctx.request.files[0]
      const fileData = fs.readFileSync(file.filepath);
      const base64Str = Buffer.from(fileData, 'binary').toString('base64');
      const bufferData = Buffer.from(base64Str, 'base64');
      // 获取当前日期，用于文件夹创建
      const dirName = dayjs().format('YYYYMMDD');
      // 指定上传路径
      const uploadBasePath = '../public/uploadForFile'
      // 文件重命名
      const filename = `${Date.now()}_${randomString({ length: 6 })}_${path.extname(file.filename)}`
      const dir = path.join(__dirname, uploadBasePath, dirName);
      const src = path.join(__dirname, uploadBasePath, dirName, filename);
      // 判断是否存在该文件夹，不存在则创建。
      if (!fs.pathExistsSync(dir)) fs.ensureDirSync(dir);

      await fs.outputFileSync(src, bufferData);
      ctx.status = 200;
      ctx.body = ctx.resultData('上传成功', {
        filename,
        link: `${process.env.MAIN_URL}:${process.env.SERVER_PORT}/public/uploadForFile/${dirName}/${filename}`
      })
    } catch {
      ctx.status = 500;
      ctx.body = ctx.resultErrorData('上传文件失败')
    }

  }
}
module.exports = FileController;
