var mongoose = require('mongoose');
var Comment = require('../models/comment.model')// 引数据模型

// 新增
exports.create = function(req,res,next){
    var comment = new Comment(req.body); // 从req.body里获取参数对象，比如{name:'vane',gender:'男',city:'杭州'....}

    comment.save()
    .then(data=>{
        res.json(data)
    })
    
}
//获取单个
exports.get = function(req,res,next){
   var id=req.params.id;
   Comment.findById(id,function(err,result){
    res.json(result);
   })
}
//修改
exports.update = function(req,res,next){
  
    var id = req.params.id; 
    Comment.findByIdAndUpdate(id,{$set: req.body}, {new:false} )
    .then(data=>{
        res.json({msg:'数据修改成功',status:200}); 
    })
}

//删除
exports.remove = function(req,res,next){
    var id = req.params.id;
    Comment.findByIdAndRemove(id,function(err,doc){
        res.json({msg:'数据删除成功',status:200})
    })
} 


exports.list = function(req,res,next){
    var page = (req.body.page) ? req.body.page : 1;
    
    var rows = (req.body.rows) ? req.body.rows :4;
    var queryCondition = {};
    var name;
    if( req.body.name && req.body.name.trim().length>0 ){
        name = req.body.name;
        queryCondition = {"name":new RegExp(name,'i')}
    }

    if(req.body.newId && req.body.newId.trim().length>0){
        newId=req.body.newId;
        queryCondition={
             "newId":newId
        }
    }

    Comment.paginate(queryCondition, { page: page, limit: parseInt(rows) }, function(err, result) {
       result.rows = result.docs;
       delete result.docs;

       res.json(result)
    });
}
//all
exports.all = function(req,res,next){
    Comment.find({},function(err,data){
        res.json(data);
    })
}

