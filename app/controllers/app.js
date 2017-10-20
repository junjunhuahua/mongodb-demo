'use strict'

// 用于封装controllers的公共方法

let mongoose = require('mongoose');
let uuid = require('uuid');
let User = mongoose.model('User');

exports.hasBody = async (ctx, next) => {
    let body = ctx.request.body || {};
    // console.log(this.query.phonenumber)
    console.log(body);

    if (Object.keys(body).length === 0) {
        ctx.body = {
            success: false,
            err: '某参数缺失'
        };

        return next
    }

    await next()
};
