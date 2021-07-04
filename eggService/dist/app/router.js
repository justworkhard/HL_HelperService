'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;
  router.get('/', controller.home.index);

  router.get('/news', controller.news.list);

  router.get('/user/:id', controller.user.info);

  router.post('/helper/add/word', controller.helperWords.add);
  router.get('/helper/wordList', controller.helperWords.getWord);
  router.post('/helper/checkWord', controller.helperWords.checkWord);
  router.post('/helper/forgetWord', controller.helperWords.forgetWord);
};