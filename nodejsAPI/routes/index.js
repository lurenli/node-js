var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer=require('multer');
var path=require('path');

router.get('/', function(req, res, next) {
 res.render('index', { title: 'Express' });
});




var storage = multer.diskStorage({
	//属性
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
  }
})
//实例化
//var upload = multer({ storage: storage });
var upload = multer({ 
		storage: storage,
		fileFilter:function(req,file,callback){
			var ext =path.extname(file.originalname);
			if(ext!=='.png' && ext !=='.jpg' && ext!==".gif"){
				return callback(res.end('文件类型不符合'))
			}

			callback(null,true);
		}
		 }).single('avatar');

router.post('/upload',upload,function(req,res,next){
	
	
			upload(req,res,function(err,data){
				res.end('file uploaded')
				console.log(data)
			})

})
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
//   }
// })
// var upload = multer({ storage: storage })
// exports.upload=function(req,res,next){
//   var upload=multer({
//     storage:storage,
//     fileFilter:function(req,file,callback){
//       var ext=path.extname(file.originalname);
//       if(ext!=='.png' && ext!=='.jpg' && ext!=='.gif'){
//         return callback(res.end('文件类型不符合'));
//       }

//       callback(null,true)
//     }
//   }).single('avatar')
//   upload(req,res,function(err){
//     console.log(req.file)
//     res.json(req.file)
//   })
// }



module.exports = router;
