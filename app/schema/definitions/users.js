'use strict';

module.exports = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
    },
    avatar: {
      type: 'string',
      maxLength: 255,
    },
    role: {
      type: 'string',
      enum: ['admin', 'user'],
    },
    username: {
      type: 'string',
      maxLength: 30,
    },
    mobile: {
      type: 'string',
      maxLength: 11,
    },
    email: {
      type: 'string',
      maxLength: 30,
    },
    password: {
      type: 'string',
      maxLength: 255,
    },
    last_login: {
      type: 'string',
      format: 'string',
    },
    created_at: {
      type: 'string',
      format: 'string',
    },
    updated_at: {
      type: 'string',
      format: 'string',
    },
  },
  required: ['id', 'username', 'email', 'password', 'role'], // 确定哪些字段是必填的
  // 表示不允许有 schema 中未定义的额外属性
  additionalProperties: false,
};
