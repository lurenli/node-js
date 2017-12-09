var mongoose=require('mongoose');
const Schema=mongoose.Schema;
var mongoosePaginate=require('mongoose-paginate');
//var ObjectId=Schema.ObjectId;
//定义一个普通数据模型
var UploadSchema=new mongoose.Schema({
	type:String,//上传的类型
	title: {type: String},//标题
	fieldname:String,//字段名
	originalname:String,//原始名
	encoding:String,//编码
	mimetype:String,//上传的类型
	destination:String,//描述
	filename:String,//文件名
	path:String,//路径
	size:String,//大小
	cateId:String,//所属的分类Id
	date:{type:Date,default:Date.now}
	
});
//将数据模型应用分页插件
UploadSchema.plugin(mongoosePaginate);//schema数据模型里使用了分页插件


module.exports=mongoose.model('Upload',UploadSchema,'upload');