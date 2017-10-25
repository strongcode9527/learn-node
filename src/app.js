import Koa from 'koa'
import path from 'path'
import views from 'koa-views'
import Router from 'koa-router'
import koaStatic from 'koa-static'
import routerConfig from './routes'

const app = new Koa()
const router = new Router()

routerConfig(router)

app
  .use(koaStatic(
    path.join( __dirname, './static')
  ))
  .use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
  }))
  .use(router.routes()) 
  .use(router.allowedMethods)
  
 
app.listen(9527)

