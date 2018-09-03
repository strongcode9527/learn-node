var cluster = require('cluster');
var cpuNums = require('os').cpus().length;
var http = require('http');



export default async function jsonp(ctx) {
  const response = await dnsPromise(url, options)
    // .then(function(err, address, family){
    //   if(err) throw err;
    //   console.log(address);
    //   ctx.body = JSON.stringify(address)
    // })

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

  ctx.body = `response from worker ${process.pid}`

}