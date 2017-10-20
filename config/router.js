'use strict';

const Router = require('koa-router');
const User = require('../app/controllers/user');

module.exports = function () {
    let router = new Router({
        prefix: '/api'
    });

    router.post('/test/user/users', User.users);
    router.post('/test/user/user', User.user);
    router.post('/test/user/add', User.addUser);
    router.post('/test/user/delete', User.deleteUser);
    return router
};