var express = require('express');
var router = express.Router();
var dataCtrl=require('../controllers/user.controller');
var multer=require('multer');
var path=require('path');



router.post('/data',dataCtrl.create);
//修改
router.post('/data/:id',dataCtrl.update);
//删除
router.delete('/data/:id',dataCtrl.remove);
//删除多个
router.post('/removes',dataCtrl.removes);
//获取单个对象
router.get('/data/:id',dataCtrl.get);
router.post('/list',dataCtrl.list);
router.post('/all',dataCtrl.all);


//login
router.post('/login',dataCtrl.login);


router.post('/upload',dataCtrl.upload);
module.exports = router;
