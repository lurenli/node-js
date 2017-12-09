var express = require('express');
var router = express.Router();
var dataCtrl=require('../controllers/cate.controller');

router.post('/data',dataCtrl.create);
//修改
router.post('/data/:id',dataCtrl.update);

router.delete('/data/:id',dataCtrl.remove);
//获取单个对象
router.get('/data/:id',dataCtrl.get);
router.post('/list',dataCtrl.list);

router.get('/list/:type',dataCtrl.list);
module.exports = router;


