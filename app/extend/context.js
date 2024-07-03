'use strict';
module.exports = {
  resultData(message,data = {}) {
    return  {
      data,
      message,
    };
  },
};
