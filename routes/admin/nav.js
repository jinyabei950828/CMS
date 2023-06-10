const express = require("express")
const router = express.Router();

const tools = require("../../model/tools")
const NavModel = require("../../model/navModel")

router.get('/', (req,res)=>{
  res.send("导航列表")
});

router.get('/add', async (req,res)=>{
  var result = new NavModel({
    title:"首页",
    url:"www.itying.com"
  })
  await result.save()
  res.send("增加导航成功")
});

router.get('/edit', (req,res)=>{
  res.send("修改导航")
});

router.post('/doAdd',tools.multer().single("pic"),(req,res)=>{
  res.send({
    body:req.body,
    file:req.file
  })
});

router.get('/doEdit', (req,res)=>{
  res.send("执行修改")
});

module.exports = router;