import Koa from 'koa'
import Router from 'koa-router'
import routerConfig from './routes'

const app = new Koa()
const router = new Router()

routerConfig(router)

app
  .use(router.routes())
  .use(router.allowedMethods)
  


app.listen(9527)

