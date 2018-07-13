// app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/newuser', controller.newusers.index);
  router.get('/search', app.middlewares.uppercase(), controller.search.search);
  router.resources('user', '/user', app.controller.user)
  router.resources('post', '/post', app.controller.post)
};