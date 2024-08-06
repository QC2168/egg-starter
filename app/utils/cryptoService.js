const JSEncrypt = require('node-jsencrypt');
const CryptoJS = require('crypto-js');

module.exports = {
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
}
