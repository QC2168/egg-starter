/* eslint valid-jsdoc: "off" */
require('@dotenvx/dotenvx').config()
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {

  };
  config.logger = {
    outputJSON: true,
  }
  config.sequelize = {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    // 密码
    password: process.env.DB_PASSWORD,
  }
  // cors跨域配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true, // 忽略所有的JSON类型的POST请求
    },
    domainWhiteList: ['*'], // 允许访问域名的白名单,*表示都能访问
  };
  // jwt
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1719498501356_8952';

  // add your middleware config here
  config.middleware = ['errorHandler', 'notfoundHandler'];
  config.errorHandler = {
    match: '/api',
  }
  // 统一异常处理
  config.onerror = {
    all(err, ctx) {
      // 定义所有响应类型的错误处理方法
      // 定义了 config.all 后，其他错误处理不再生效
      ctx.body = { message: '服务器异常，请联系管理员' };
      ctx.status = 500;
    }
  }

  config.bodyParser = {
    enable: true,
    encoding: 'utf8',
    formLimit: '100kb',
    jsonLimit: '100kb',
    strict: true,
    // @see https://github.com/hapijs/qs/blob/master/lib/parse.js#L8 for more options
    queryString: {
      arrayLimit: 100,
      depth: 5,
      parameterLimit: 1000,
    },
    enableTypes: ['json', 'form', 'text'],
    extendTypes: {
      text: ['text/xml', 'application/xml'],
    },
  }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};