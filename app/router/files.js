module.exports = ({ router, controller }) => {
  router.post('/file/upload', controller.file.upload);
};
