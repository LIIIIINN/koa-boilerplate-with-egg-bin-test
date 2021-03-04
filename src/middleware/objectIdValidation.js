'use strict'
const Mongoose = require('mongoose');

module.exports = async (ctx, next) => {

    try{
        const {id} = ctx.params
        const objectId = new Mongoose.Types.ObjectId(id);
        ctx.objectId = objectId;
        await next();
    }
    catch (err) {
        ctx.throw(400, {
            message: err.message,
        });
    }
};