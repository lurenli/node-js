const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');

// 定义一个普通的数据模型
var UserSchema = new mongoose.Schema({
    title:String,
    password:String,
    mail:String,
    data:{type:Date,default:Date.now},
    gender:String,
    interest:[],
    desc:String,
    name:String
});
// 将数据模型应用分页插件
UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', UserSchema,'user');