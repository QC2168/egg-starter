module.exports = data => {
  return {
    type: 'object',
    properties: {
      message: {
        type: 'string',
        description: '服务器信息',
      },
      data: {
        type: 'object',
        description: '返回数据集',
        ...data,
      },
      meta: {
        type: 'object',
        description: '媒体数据',
        properties: {
          currentPage: {
            type: 'integer',
            description: '当前页码',
            minimum: 1,
          },
          totalPage: {
            type: 'integer',
            description: '总页数，可能为 null',
          },
          hasPrev: {
            type: 'boolean',
            description: '是否有上一页',
          },
          hasNext: {
            type: 'boolean',
            description: '是否有下一页',
          },
          total: {
            type: 'integer',
            description: '总记录数',
          },
        },
      }
    },
    required: [
      'message',
      'data',
    ],
    additionalProperties: false,
  };
};
