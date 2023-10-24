var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    result=req.query.x;
    if(result==undefined)
    result=(Math.random()*100);
    bonus1=Math.log2(result)
    bonus2=Math.cosh(result)
    bonus3=Math.floor(result)
  
  res.send(`log2 of ${result} is ${bonus1},cosh of ${result} is ${bonus1} and floor of ${result} is ${bonus1} `);
  
});

module.exports = router;