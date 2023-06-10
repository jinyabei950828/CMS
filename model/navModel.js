const mongoose = require("./core")

let NavSchema = mongoose.Schema({
  title:{type:String},
  url:{type:String},
  status:{type:Number,default:1},
  add_time:{type:Number}
})

module.exports = mongoose.model("Nav",NavSchema,"nav")