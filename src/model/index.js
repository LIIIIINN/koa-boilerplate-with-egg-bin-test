'use strict'

const mongoose = require('mongoose');
const UserModel = require('./User');
mongoose.connect("mongodb://127.0.0.1:27017/jr-12", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); // / jr-12 制定数据库

module.exports = {
    UserModel,
}


