var express = require('express');
var router = express.Router();
var dataCtrl=require("../controllers/news.controller")

router.post('/data',dataCtrl.create);
router.post('/data/:id',dataCtrl.update);
router.delete('/data/:id',dataCtrl.remove);
router.post("/list",dataCtrl.list)
router.post("/all",dataCtrl.list)

//获取单个对象
router.get('/data/:id',dataCtrl.get);

module.exports = router;
