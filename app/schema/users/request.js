const requestPageLimitRoot = require("../utils/requestPageLimitRoot");
const usersSchema = require('../definitions/users')


module.exports = requestPageLimitRoot(usersSchema);
