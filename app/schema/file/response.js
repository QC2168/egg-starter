const responseRoot = require("../utils/responseRoot");

const schema = {
  type: 'object',
  properties: {
    link: {
      type: 'string',
      description: '图片地址',
    },
    filename: {
      type: 'string',
      description: '图片名称',
    },
  },
  required: [
    'link',
    'filename',
  ],
  additionalProperties: false,
};

module.exports = responseRoot(schema);
