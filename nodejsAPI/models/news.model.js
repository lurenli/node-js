var mongoose=require('mongoose');
const Schema=mongoose.Schema;
var mongoosePaginate=require('mongoose-paginate');
var ObjectId=Schema.ObjectId;
//定义一个普通数据模型
var NewsSchema=new mongoose.Schema({
	maintitle:String,
	authorer:String,
	htitle:String,
	content:String,
//	date:{type:Date,default:Date.now},
	date:String,
	time:String,
	belongs:String,
	cateId:String,
	type:String,
});
//将数据模型应用分页插件
NewsSchema.plugin(mongoosePaginate);//schema数据模型里使用了分页插件


module.exports=mongoose.model('News',NewsSchema,'news');