var express = require('express');
var router = express.Router();
var path=require('path');
var dataCtrl=require('../controllers/upload.controller');


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/data',dataCtrl.create);
router.post('/data',dataCtrl.create);
router.post('/list',dataCtrl.list);
router.get('/data/:id',dataCtrl.get);
router.post('/all',dataCtrl.all);
router.delete('/data/:id',dataCtrl.remove);



module.exports = router;