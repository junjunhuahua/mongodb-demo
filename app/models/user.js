'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// 定义表结构
let UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sex: String,
    area: String,
    always: Boolean,
    relationship: Array,
    mobile: String,
    phone: String,
    desc: String,
    id: String
});

// 参数User 数据库中的集合名称, 不存在会创建.
let User = mongoose.model('User', UserSchema);

module.exports = User;
