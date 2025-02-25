/**
 * @param {Egg.Application} app - egg application
 */
//node默认的 commonjs规范
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/post', controller.post.index);
  router.get('/user/:id', controller.home.user);
  router.post('/add', controller.home.add);
};
