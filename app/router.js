'use strict'
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app
  router.get('/', controller.home.index)

  // role
  // router.post('/api/role', controller.role.create)
  // router.delete('/api/role/:id', controller.role.destory)
  // router.put('/api/role/:id', controller.role.update)
  // router.get('/api/role/:id', controller.role.show)
  // router.get('/api/role', controller.role.index)
  router.delete('/api/role', controller.role.removes)
  router.resources('role', '/api/role', controller.role)

  // userAccess
  router.post('/api/user/access/login', controller.userAccess.login)
  router.get('/api/user/access/logout', controller.userAccess.logout)
  router.put('/api/user/access/resetPsw', app.jwt, controller.userAccess.resetPsw)

  // user
  // router.post('/api/user', controller.user.create)
  // router.delete('/api/user/:id', controller.user.destory)
  // router.put('/api/user/:id', controller.user.update)
  // router.get('/api/user/:id', controller.user.show)
  // router.get('/api/user', controller.user.index)
  router.delete('/api/user', controller.user.removes)
  router.resources('user', '/api/user', controller.user)

  // upload
  router.post('/api/upload', controller.upload.create)
  router.post('/api/uploads', controller.upload.multiple)
  router.delete('/api/upload/:id', controller.upload.destory)
  router.put('/api/upload/:id', controller.upload.update)
  router.get('/api/upload/:id', controller.upload.show)
  router.get('/api/upload', controller.upload.index)
  // router.delete('/api/upload', controller.upload.removes)
  // router.resources('upload', '/api/upload', controller.upload)

}
