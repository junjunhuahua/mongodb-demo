'use strict';

const Router = require('koa-router');
const User = require('../app/controllers/user');
// const App = require('../app/controllers/app');

module.exports = function () {
    let router = new Router({
        prefix: '/api'
    });
    // DB Interface test
    router.post('/test/user/users', User.users);
    router.post('/test/user/user', User.user);
    router.post('/test/user/add', User.addUser);
    router.post('/test/user/delete', User.deleteUser);
    return router
};