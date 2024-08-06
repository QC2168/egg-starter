module.exports = ({ router, controller }) => {
  router.resources('users', '/users', controller.users);
};
