const { Service } = require('egg');
const { Cache } = require('file-system-cache')
const cache = new Cache({
  basePath: "./.cache",
  hash: "sha1",
  ttl: 60 * 60 * 24 * 3
});
class FileCacheService extends Service {
  async get(key) {
    return await cache.get(key);
  }
  async set(key, value, ttl) {
    await cache.set(key, value, ttl || 60 * 60 * 24 * 3);
  }
}
module.exports = FileCacheService;

