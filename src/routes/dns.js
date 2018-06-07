/*
   一个dns对应多个ip的用处：

   DNS负载均衡技术是在DNS服务器中为同一个主机名配置多个IP地址，在应答DNS查询时，DNS服务器对每个查询将以DNS文件中主机记录的IP地址按顺序返回不同的解析结果，将客户端的访问引导到不同的机器上去，使得不同的客户端访问不同的服务器，从而达到负载均衡的目的。
　　DNS负载均衡的优点是经济简单易行，并且服务器可以位于internet上任意的位置。但它也存在不少缺点：
 */


const dns = require('dns'),
      util = require('util'),
      options = {all: true},
      url = 'www.baidu.com',
      dnsPromise = util.promisify(dns.lookup)

export default async function jsonp(ctx) {
  const response = await dnsPromise(url, options)
    // .then(function(err, address, family){
    //   if(err) throw err;
    //   console.log(address);
    //   ctx.body = JSON.stringify(address)
    // })
  console.log(response)
  ctx.body = `${url}'s dns are ${JSON.stringify(response)}`

}