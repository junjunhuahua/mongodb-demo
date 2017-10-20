'use strict';

let mongoose = require('mongoose');
let User = mongoose.model('User');

/* 查找用户 */
exports.findAllUsers = async () => {
    let query = User.find();
    let res = [];
    await query.exec(function (err, users) {
        if (err) {
            res = [];
        } else {
            res = users;
        }
    });
    return res
};

/* 查找特定用户 */
exports.findFilterUsers = async (params) => {
    let nameReg = new RegExp(params.name, 'i');
    let query = User.find({
        name: {
            $regex: nameReg
        }
    });
    let res = [];
    await query.exec(function (err, users) {
        if (err) {
            res = []
        } else {
            res = users;
        }
    });
    return res
};

/* 查找单个用户 */
exports.findUser = async (params) => {
    let query = User.find({
        id: params.id
    });
    let res = {};
    await query.exec(function (err, tUser) {
        if (err) {
            res = '没有该用户';
        } else {
            res = tUser[0];
        }
    });
    return res
};

/* 新增用户 */
exports.addUser = async (user) => {
    user = await user.save();
    return user
};

/* 编辑用户 */
exports.updateUser = async (user) => {
    user = await User.update({id: user.id}, {
        $set: {
            name: user.name,
            sex: user.sex,
            area: user.area,
            always: user.always,
            relationship: user.relationship,
            phone: user.phone,
            mobile: user.mobile,
            desc: user.desc
        }
    });
    return user
};

/* 删除用户 */
exports.deleteUser = async ({id}) => {
    let flag = false;
    console.log('flag==========>' + flag);
    await User.remove({id}, function (err) {
        if (err) {
            flag = false
        } else {
            flag = true
        }

    });
    console.log('flag=====await=====>' + flag);
    return flag
};
