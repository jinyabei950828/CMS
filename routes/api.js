var express = require('express');
var router = express.Router();

router.get('/api', (req,res)=>{
  res.send("api接口")
});

module.exports = router;