var mongoose = require('mongoose'),
    materializedPlugin = require('mongoose-materialized'),
    Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost/materialized');

var CateSchema = new Schema({
	type:Number,//1.新闻2.上传3.产品
  	title: {type: String}
});


CateSchema.plugin(materializedPlugin);
module.exports = mongoose.model('Cate', CateSchema,'cate');