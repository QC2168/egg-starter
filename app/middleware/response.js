// app/middleware/response.js
module.exports = () => {
  return async (ctx, next) => {
    await next(); // 等待下一个中间件执行完毕

    // 如果已经设置了响应体且是对象类型，则进行包装
    if (ctx.body && typeof ctx.body === 'object') {
      // 根据ctx.body的内容决定message，默认为'success'
      let message = ctx.body instanceof Error ? ctx.body.message : 'success';
      if (typeof ctx.body === 'object' && !Array.isArray(ctx.body) && ctx.body.message) {
        // 如果ctx.body中已经包含了message字段，则优先使用
        message = ctx.body.message;
        delete ctx.body.message; // 移除原有message，避免重复
      }

      ctx.body = {
        data: ctx.body,
        message,
      };
    }
  };
};
