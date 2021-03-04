'use strict'

const mongoose = require('mongoose');

const Schema = {
    name: String,
    age: Number
};

module.exports = mongoose.model('User', Schema); //User 对应到collections里就会变成复数！！！都这个规则！！

