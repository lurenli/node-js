var mongoose = require('mongoose');
var Cate = require('../models/cate.model')// 引数据模型

// 新增
exports.create = function(req,res,next){
    var cate = new Cate(req.body);

    cate.save()
    .then(data=>{
        res.json(data)
    })
    
}


//获取单个
exports.get = function(req,res,next){
   var id=req.params.id;
   Cate.findById(id,function(err,result){
    res.json(result);
   })
}
//修改
exports.update = function(req,res,next){
  
    var id = req.params.id; 
    Cate.findByIdAndUpdate(id,{$set: req.body}, {new:false} )
    .then(data=>{
        res.json({msg:'数据修改成功',status:200}); 
    })
}

//删除
exports.remove = function(req,res,next){
    var id = req.params.id;
    var ids=[];
    
   Cate.findOne({_id:id},function(err,doc){
    if(doc){
      ids= [doc._id];//把它放到里面，在把孩子放在里面

        doc.getChildren().then(function(docs){
          for(var i=0;i<docs.length;i++){
            ids.push(docs[i]._id)
          }

          Cate.remove({_id:{$in:ids}})
          .then(data=>{
             res.json({msg:'数据删除成功',status:200}); 
          })
        })


    }
   })
} 


//递归
function reverseTree(data,pid){
	var result=[],
	temp;
	var data=JSON.parse(JSON.stringify(data));//不同于下面的data。将数据模型的data进行转换，
	//转换成普通的json对象
	for(var i in data){
		if(data[i].parentId === pid){
			result.push(data[i]);
			temp =reverseTree(data,data[i]._id);//递归操作

			if(temp.length>0){
				data[i].children =temp;//跳出
			}
		}
	}
	return result;
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

exports.list = function(req,res,next){
  var type=req.params.type;
   Cate.find({type:type},function(err,data){
   		var rever=reverseTree(data,null)
   		res.json(rever)//数据模型的data
   })
}


