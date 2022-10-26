var express = require('express');
var router = express.Router();

let x=Math.random();
let y=Math.random()

/* GET users listing. */
router.get('/', function(req, res, next) {
    if(req.query.x!=undefined)
    {
    x=req.query.x;
    }
    if(req.query.y!=undefined){

        y=req.query.y
    }

    a=Math.pow(x,y)
    b=Math.sign(x)
    c=Math.tanh(x)
    d=Math.trunc(x)
  
  res.send(`pow() applied to ${x} and ${y} is ${a}<br>sign() applied to ${x} is ${b}<br>tanh() applied to ${x} is ${c}<br>trunc() applied to ${x} is ${b}`);
});

module.exports = router;
