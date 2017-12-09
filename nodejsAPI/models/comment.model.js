 var mongoose=require('mongoose');
const Schema=mongoose.Schema;
var mongoosePaginate=require('mongoose-paginate');
 var ObjectId=Schema.ObjectId;
 
//定义一个普通数据模型

//用户的相关信息在SDE用户下进行注册SDE Schema
//在某某用户下创建的要素类信息只注册到某某的相关表里面，并没有注册到sde用户下。这就是User Schema。
var CommentSchema=new mongoose.Schema({
//	name:String,
//	content:String,
//	thump:Number,
//	date:{type:Date,default:Date.now},
//	newId:ObjectId
	who:String,//作者
    content:String,//内容
    cate:String,  //类型
    newsId:String, //新闻父节点
    date:String,  //日期
    time:String,  //时间
//  data:{type:Date,default:Date.now}
});
//将数据模型应用分页插件
 CommentSchema.plugin(mongoosePaginate);//schema数据模型里使用了分页插件


module.exports=mongoose.model('Comment',CommentSchema,'comment');

