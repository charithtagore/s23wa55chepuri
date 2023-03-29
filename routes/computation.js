var express = require('express');
var router = express.Router();
var x = Math.random();

var val1="Math.log2(x) of value "+ x + " is "+ Math.log2(x) 
var val2="Math.cosh(x) of value "+ x +" is "+ Math.cosh(x)
var val3= "Math.floor(x) of value "+ x + " is "+ Math.floor(x)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title:'Tagore Charith CHepuri ',value1: val1, value2:val2, value3:val3 });
});

module.exports = router;