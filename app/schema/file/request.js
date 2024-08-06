module.exports = {
  type: 'object',
  properties: {
    file: {
      type: 'file',
      description: '文件',
    },
  },
  required: [
    'file',
  ],
  additionalProperties: false,
};
