const express = require("express")
const router = express.Router();

const ManagerModel = require("../../model/managerModel")

router.get('/', async (req,res)=>{
  //查询数据
  let result =await ManagerModel.find({})
  console.log(result)
  res.send("管理员管理")
});

router.get('/add', (req,res)=>{
  var result = new ManagerModel({
    username:"李四",
    password:"123456"
  })
  result.save().then(res=>{
    console.log(res)
  })
  res.send("增加管理员")
});


module.exports = router;