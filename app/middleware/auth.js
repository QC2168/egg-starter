// {app_root}/app/middleware/auth.js
const jwt = require('jsonwebtoken');

module.exports = () => {
  return async function auth(ctx, next) {
    console.log('auth')
    const token = ctx.get('Authorization'); // 假设token放在Authorization header中
    if (!token) {
      ctx.body = {
        message: "请先登录用户"
      }
      ctx.status = 401
      return
    }
    try {
      const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
      ctx.state.user = decoded; // 将解码后的用户信息存到ctx.state中，方便后续使用
      await next();
    } catch (err) {
      if (err.name === 'TokenExpiredError') { // JWT库特定错误类型，表示token过期
        // ctx.throw(401, '当前用户状态已过期，请重新登录');
        ctx.body = {
          message: "当前用户状态已过期，请重新登录"
        }
        ctx.status = 401
        return

      }
      if (err.name === 'JsonWebTokenError') { // JWT库特定错误类型，表示token过期
        // ctx.throw(401, '当前用户状态有误，请重新登录');
        ctx.body = {
          message: "当前用户状态有误，请重新登录"
        }
        ctx.status = 401
        return
      }
      ctx.throw(err.state, err.message);
    }

  };
};
