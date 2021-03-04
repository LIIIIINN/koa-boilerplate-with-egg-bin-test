'use strict'

const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router/'); // 加一个 router 斜杠 默认访问文件夹的index
const app = new koa();

//use：中间件
app.use(bodyParser());
app.use(router.routes());

module.exports = app;