// {app_root}/app/middleware/auth.js
const jwt = require('jsonwebtoken');

module.exports = () => {
  return async function auth(ctx, next) {
    const token = ctx.get('Authorization'); // 假设token放在Authorization header中
    if (!token) {
      ctx.status = 401;
      ctx.body = {
        message: '请先登录用户',
      };
      return;
    }
    try {
      const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
      ctx.state.user = decoded; // 将解码后的用户信息存到ctx.state中，方便后续使用
      await next();
    } catch (err) {
      if (err.name === 'TokenExpiredError' || err.name === 'JsonWebTokenError') {
        ctx.status = 401;
        ctx.body = {
          message: err.name === 'TokenExpiredError' ?
            '当前用户状态已过期，请重新登录' :
            '当前用户状态有误，请重新登录',
        };
        return;
      }
      // 更通用的错误处理，可根据实际情况调整错误码和消息
      ctx.status = 401;
      ctx.body = {
        message: '认证过程中发生错误，请重试',
      };
      return;
    }
  };
};
