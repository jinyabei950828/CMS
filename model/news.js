var mongoose = require("./core")

var NewsSchema = mongoose.Schema({
  title:{
    type:String,
    trim:true
  },
  author:String,
  pic:String,
  content:String,
  status:{
    type:Number,
    default:1
  }
})

module.exports = mongoose.model("News",NewsSchema,'news')