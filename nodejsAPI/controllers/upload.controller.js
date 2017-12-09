var mongoose = require('mongoose');
var Upload=require('../models/upload.model');
var path=require('path');
var multer  = require('multer');



exports.create=function(req,res,next){
  var upload=new Upload(req.body);

  upload.save()
  .then(data=>{
    res.json(data);
  })
}



exports.list=function(req,res,next){
  var page=(req.body.page) ? req.body.page : 1;
  var limit=(req.body.limit) ? req.body.limit : 3;//限制为10

  var queryCondition={};
  var name;
  if(req.body.name && req.body.name.trim().length>0){
    name=req.body.name;
    queryCondition={"name":new RegExp(name,'i')};
  };

  if(req.body.newsId && req.body.newsId.trim().length>0){
    newsId=req.body.newsId;
    queryCondition={
      "newsId":newsId
    }
  }

  Upload.paginate(queryCondition,{page:page,limit:parseInt(limit)},function(err,result){
    result.rows=result.docs;
    delete result.docs;
    res.json(result);
  })
}



exports.get=function(req,res,next){
  var id=req.params.id;
  Upload.findById(id,function(err,result){
    // console.log(result)
    res.json(result)//记得转成json，不然没有办法在页面中输出
  })
}



exports.remove=function(req,res,next){
  var id=req.params.id;
  Upload.findByIdAndRemove(id,function(err,doc){
    res.json({msg:'数据删除成功',status:200})
  })
}


exports.all = function(req,res,next){
    Upload.find({},function(err,data){
        res.json(data);
    })
}