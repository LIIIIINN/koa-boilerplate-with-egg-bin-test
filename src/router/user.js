
'use strict'
const { userCtl } = require('../controller/');
const { objectIdValidation } = require('../middleware/');

module.exports = (router) => {
    //single user
    router.get('/user/:id', objectIdValidation, userCtl.getUser);
    router.post('/user', userCtl.createUser);
    router.put('/user/:id', objectIdValidation, userCtl.updateUser);
    router.delete('/user/:id', objectIdValidation, userCtl.deleteUser);

    //batch users 传多个id 可用逗号分隔
    //router.get('/batch/user/:ids', userCtl.batchGetUser);
    router.get('/batch/user', userCtl.batchGetUser);
    router.post('/batch/user', userCtl.batchCreateUser);
    router.put('/batch/user/:ids', userCtl.batchUpdateUser);
    router.delete('/batch/user/:ids', userCtl.batchDeleteUser);

    //list 分页查询 localhost:3000?page=1&pageSize =10: 给我第一页，每页有10个
    router.get('/user', userCtl.listUser);
}


