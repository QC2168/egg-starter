
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const apiPrefix = '/api';
  router.get(apiPrefix, controller.home.index);
  router.get('/demo', controller.home.demo);
  router.resources('users','/users', controller.users);
};
