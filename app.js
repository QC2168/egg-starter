module.exports = app => {
  app.messenger.on('setCache', data => {
    const ctx = app.createAnonymousContext();
    ctx.runInBackground(async () => {
      await ctx.service.fileCache.set(data.key, data.value, data.ttl);
    });
  });
  app.messenger.on('removeCache', data => {
    const ctx = app.createAnonymousContext();
    ctx.runInBackground(async () => {
      await ctx.service.fileCache.remove(data.key);
    });
  });
  app.messenger.on('clearCache', () => {
    const ctx = app.createAnonymousContext();
    ctx.runInBackground(async () => {
      await ctx.service.fileCache.clear();
    });
  });
};

