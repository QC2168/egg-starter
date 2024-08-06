module.exports = ({ router,controller }) => {
  router.get('/demo', controller.home.demo);
};
