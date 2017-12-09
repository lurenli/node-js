var mongoose = require('mongoose');
var User = require('../models/user.model')// 引数据模型
var path=require('path');
var multer  = require('multer');
// 新增
exports.create = function(req,res,next){
    var user = new User(req.body); // 从req.body里获取参数对象，比如{name:'vane',gender:'男',city:'杭州'....}

    user.save()
    .then(data=>{
        res.json(data)
    })
    
}
//login
// 新增
exports.login = function(req,res,next){
    var name=req.body.name;
    var password=req.body.password;
    var data={name:name,password:password};
    User.findOne(data,function(err,result){
      res.json(result)
    })
   
    
    
}
//获取单个
exports.get = function(req,res,next){
   var id=req.params.id;
   User.findById(id,function(err,result){
    res.json(result);
   })
}
//修改
exports.update = function(req,res,next){
  
    var id = req.params.id; 
    User.findByIdAndUpdate(id,{$set: req.body}, {new:false} )
    .then(data=>{
        res.json({msg:'数据修改成功',status:200}); 
    })
}

//删除
exports.remove = function(req,res,next){
    var id = req.params.id;
    User.findByIdAndRemove(id,function(err,doc){
        res.json({msg:'数据删除成功',status:200})
    })
} 

//删除多个
exports.removes = function(req,res,next){
   var ids = req.body.ids;
   User.remove({_id : { $in: ids}})
   .then(data=>{
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


    User.paginate(queryCondition, { page: page, limit: parseInt(rows) }, function(err, result) {
       result.rows = result.docs;
       delete result.docs;

       res.json(result)
    });
}

//all
exports.all = function(req,res,next){
    User.find({},function(err,data){
        res.json(data);
    })
}




var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
})
var upload = multer({ storage: storage })
exports.upload=function(req,res,next){
  var upload=multer({
    storage:storage,
    fileFilter:function(req,file,callback){
      var ext=path.extname(file.originalname);
      if(ext!=='.png' && ext!=='.jpg' && ext!=='.gif'){
        return callback(res.end('文件类型不符合'));
      }

      callback(null,true)
    }
  }).single('avatar')
  upload(req,res,function(err){
    console.log(req.file)
    res.json(req.file)
  })
}