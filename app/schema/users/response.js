const responseRoot = require("../utils/responseRoot");

const schema = {
  type: 'object',
  $ref: '#/definitions/users',
  additionalProperties: false,
};


module.exports = responseRoot(schema);
