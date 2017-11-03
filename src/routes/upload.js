import multer from 'koa-multer'
//文件上传  
//配置  
var storage = multer.diskStorage({  
  //文件保存路径  
  destination: function (req, file, cb) {  
    cb(null, 'src/static/img')  
  },  
  //修改文件名称  
  filename: function (req, file, cb) {  
    var fileFormat = (file.originalname).split(".");  
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);  
  }  
})  
//加载配置  
export var uploadEvent = multer({ storage: storage }); 

export async function upload(ctx) {
  await ctx.render('upload', {
  })
} 

export async function uploadApi(ctx) {
  console.log(ctx.request)
}