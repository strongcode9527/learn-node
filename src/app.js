import Koa from 'koa'
import path from 'path'
import open from 'open'
import views from 'koa-views'
import koaBody from 'koa-body'
import Router from 'koa-router'
import koaStatic from 'koa-static'


import routerConfig from './routes'

const app = new Koa()
const router = new Router()

routerConfig(router)

app
  //静态文件获取
  .use(koaStatic(
    path.join( __dirname, './static')
  ))
  //处理请求体，目前应用于图片上传。
  
  .use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
  }))
  .use(koaBody({multipart: true}))
  .use(router.routes()) 
  .use(router.allowedMethods)


// app.listen(9527)

var cluster = require('cluster');
var cpuNums = require('os').cpus().length;
var http = require('http');

console.log(cpuNums)

if(cluster.isMaster){
  for(var i = 0; i < cpuNums; i++){
    cluster.fork();
  }
  
}else{
  http.createServer(function(req, res){
    res.end(`response from worker ${process.pid}`);
  }).listen(9000);

  console.log(`Worker ${process.pid} started`);
}



 



