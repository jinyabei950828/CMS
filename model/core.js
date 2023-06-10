const mongoose = require("mongoose")
const config = require("../config/config")

mongoose.connect(config.dbUrl).then((err)=>{
  if(err){
    console.log(err)
    return;
  }
  console.log("连接成功")
})

module.exports = mongoose