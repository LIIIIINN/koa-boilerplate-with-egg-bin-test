'use strict'

const Router = require('koa-router');
const helloWorld = require('../controller/hello_world');


//global router
const router = new Router();

require('./user')(router)
//路由注册：router.get('/'
router.get('/', helloWorld);

module.exports = router;