var express = require('express');
var router = express.Router();
var db=require('../models');
/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); */

router.post('/',(req,res)=>{
    db.register_model.create(req.body).then((response)=>{
      res.status(201).send(response)}).catch((err)=>{
    res.status(400).send(err)
    })
    
    });

module.exports = router;