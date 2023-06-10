const multer = require("multer")
const path = require("path")
const sd = require("silly-datetime")
const {mkdirp} = require("mkdirp")

let tools = {
  multer(){
    const storage = multer.diskStorage({
      //配置上传目录
      destination:async (req,file,cb)=>{
        let day = sd.format(new Date(),"YYYYMMDD")
        let dir = path.join("static/upload",day)
        await mkdirp(dir)
        cb(null,dir)
      },
      filename:(req,file,cb)=>{
        let extname = path.extname(file.originalname)
        cb(null,Date.now()+extname)
      }
    })

    const upload = multer({storage:storage})
    return upload
  }
}

module.exports = tools