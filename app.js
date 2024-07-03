module.exports = app => {
  app.messenger.on('setCache', data => {
    const ctx = app.createAnonymousContext();
    ctx.runInBackground(async () => {
      await ctx.service.fileCache.set(data.key, data.value, data.ttl);
    });
  });
};

