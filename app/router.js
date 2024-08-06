/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/files')(app);
  require('./router/demo')(app);
  require('./router/users')(app);
};
