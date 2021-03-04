'use strict'
const { UserModel } = require('../model/');
//const User = require('../model/User');

async function getUser (ctx) {
    const { objectId } = ctx;
    const { id } = ctx.params;
    //const objectId = new Mongoose.Types.objectId(id);
    const res = await UserModel.findOne({ _id: objectId });
    if(!res) {
        ctx.body = {
            message: `${id} not found`
        };
        ctx.status = 404;
    } else {
        ctx.body = res;
    }
}

async function createUser (ctx) {

    const { body } = ctx.request;
    const user = new UserModel(body);
    const res = await user.save();
    ctx.body = res;
    ctx.status = 201;
    
}

async function updateUser (ctx) {

    const { objectId } = ctx;
    const { id } = ctx.params;
    const { body } = ctx.request;

    const { n } = await UserModel.updateOne({_id: objectId}, {$set: body});

    if(n === 0) {
        ctx.body = {
            message: `${id} not found`
        };
        ctx.status = 404;
    }else {
        ctx.body = {
            message: `${id} updated`
        }
    }
}

async function deleteUser (ctx) {
    const { objectId } = ctx;
    const { id } = ctx.params;

    const {n} = await UserModel.deleteOne({_id: objectId})

    if(n === 0) {
        ctx.body = {
            message: `${id} not found`
        };
        ctx.status = 404;
    }else {
        ctx.body = {
            message: `${id} deleted`
        }
    }
    
}

async function batchGetUser (ctx) {

}

async function batchCreateUser (ctx) {
    
}

async function batchUpdateUser (ctx) {
    
}

async function batchDeleteUser (ctx) {
    
}
async function listUser (ctx) {

    const { page, pageSize } = ctx.query;
    //转数字
    page = +page;
    pageSize= +pageSize;

    const skip = pageSize * (pag -1);
    const res = await UserModel.find().skip(skip).limit(pageSize);
    const count = await UserModel.count();
    ctx.body = {
        results: res,
        count,
    }
}


module.exports = {
    getUser,
    updateUser,
    createUser,
    deleteUser,
    batchGetUser,
    batchCreateUser,
    batchUpdateUser,
    batchDeleteUser,
    listUser
}