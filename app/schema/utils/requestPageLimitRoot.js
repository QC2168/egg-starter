module.exports = moreFilter => {
  return {
    type: 'object',
    properties: {
      page: {
        type: 'number',
        description: '页数',
      },
      limit: {
        type: 'number',
        description: '默认获取10个数据',
      },
      ...moreFilter
    },
    required: [
      'page',
      'limit',
    ],
    additionalProperties: false,
  };
};
