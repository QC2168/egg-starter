module.exports = () => {
  return async function notFoundHandler(ctx, next) {
    await next();
    if (ctx.status === 404 && !ctx.body) {
      if (ctx.acceptJSON) {
        ctx.status = 404
        ctx.body = { error: 'Not Found' };
      } else {
        ctx.status = 404
        ctx.body = '<h1>Page Not Found</h1>';
      }
    }
  };
};
