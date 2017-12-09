var mongoose = require('mongoose');
var News = require('../models/news.model')// 引数据模型

// 新增
exports.create = function(req,res,next){
    var news = new News(req.body); // 从req.body里获取参数对象，比如{name:'vane',gender:'男',city:'杭州'....}

    news.save()
    .then(data=>{
        res.json(data)
    })
    
}

//修改
exports.update = function(req,res,next){
  
    var id = req.params.id; 
    News.findByIdAndUpdate(id,{$set: req.body}, {new:false} )
    .then(data=>{
        res.json({msg:'数据修改成功',status:200}); 
    })
}
//获取单个
exports.get = function(req,res,next){
   var id=req.params.id;
   News.findById(id,function(err,result){
    res.json(result);
   })
}
//删除
exports.remove = function(req,res,next){
    var id = req.params.id;
   News.findByIdAndRemove(id,function(err,doc){
        res.json({msg:'数据删除成功',status:200})
    })
} 


exports.list = function(req,res,next){
    var page = (req.body.page) ? req.body.page : 1;
    //var limit = (req.body.limit) ? req.body.limit :4;
    var rows = (req.body.rows) ? req.body.rows :4;
    var queryCondition = {};
    var title;
    if( req.body.title && req.body.title.trim().length>0 ){
        title = req.body.title;
        queryCondition = {"title":new RegExp(title,'i')}
    }

    if(req.body.cateId && req.body.cateId.trim().length>0){
        cateId=req.body.cateId;
        queryCondition={
             "cateId":cateId
        }
    }


    News.paginate(queryCondition, { page: page, limit: parseInt(rows)}, function(err, result) {
       result.rows = result.docs;
       delete result.docs;

       res.json(result)
    });
}

//all
exports.all = function(req,res,next){
    News.find({},function(err,data){
        res.json(data);
    })
}
