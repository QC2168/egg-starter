
const { v4: uuidv4 } = require('uuid');

module.exports = {
  generateUUID() {
    return uuidv4();
  },
}
