'use strict';
const JSEncrypt = require('node-jsencrypt');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  generateToken(data) {
    return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN }); // 生成token
  },
  verifyToken(token) {
    return jwt.verify(token, this.app.env.jwt.secret); // 验证token
  },
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
  generateUUID() {
    return uuidv4();
  },
  md5(data) {
    let str = data;
    if (typeof data === 'object') {
      str = JSON.stringify(data);
    }
    return CryptoJS.MD5(str)
      .toString();
  },
  aesEncrypt(data, options) {
    options = Object.assign({ key: this.app.config.website.key, iv: this.app.config.website.iv }, options);
    let str = data;
    if (typeof data === 'object') {
      str = JSON.stringify(data);
    }
    str = CryptoJS.enc.Utf8.parse(str);
    const crypto = CryptoJS.AES.encrypt(str, CryptoJS.enc.Utf8.parse(options.key), {
      iv: CryptoJS.enc.Utf8.parse(options.iv),
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return crypto.toString(); // 对称加密内容
  },
  aesDecrypt(data, options) {
    options = Object.assign({ key: this.app.config.website.key, iv: this.app.config.website.iv }, options);
    const decrypt = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(options.key), {
      iv: CryptoJS.enc.Utf8.parse(options.iv),
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return CryptoJS.enc.Utf8.stringify(decrypt); // 对称解密内容
  },
  encrypt(str, options) {
    options = Object.assign({ publicKey: this.app.config.website.publicKey }, options);
    const encrypted = new JSEncrypt();
    encrypted.setPublicKey(options.publicKey.toString());
    return encrypted.encrypt(str); // 非对称加密字符串
  },
  decrypt(str, options) {
    options = Object.assign({ privateKey: this.app.config.website.privateKey }, options);
    const decrypted = new JSEncrypt(); // 创建解密对象实例
    decrypted.setPrivateKey(options.privateKey.toString()); // 设置私钥
    return decrypted.decrypt(str); // 非对称解密内容
  }
};
