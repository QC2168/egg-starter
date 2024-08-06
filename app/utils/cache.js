module.exports = {
  async getCache(key) {
    const value = (await this.ctx.service.fileCache.get(key)) || '{}';
    const objVal = JSON.parse(value);
    // 判断如果是空对象，则返回null
    if (Object.keys(objVal).length === 0 && objVal.constructor === Object) {
      return null;
    }

    return objVal;
  },
  async setCache(key, data) {
    const value = JSON.stringify(data);
    await this.ctx.app.messenger.sendToApp('setCache', {
      key,
      value,
    });
  },
  async removeCache(key) {
    await this.ctx.app.messenger.sendToApp('removeCache', {
      key
    });
  },
  async clearCache() {
    await this.ctx.app.messenger.sendToApp('clearCache');
  }
}
