import dns from './dns'
import cluster from './cluster'
import weather from './weather'
import canvas2img from './canvas2img'
import {jsonp, jsonpApi} from './jsonp'
import {upload, uploadApi} from './upload'

export default function(router){
  router.get('/',async function (ctx) {
    await ctx.render('index')
  })
  router.get('/weather', weather)
  router.get('/jsonp', jsonp )
  router.get('/jsonp/api', jsonpApi)
  router.get('/upload', upload)
  router.post('/upload/img', uploadApi)
  router.get('/dns', dns)
  router.get('/canvas2img', canvas2img)
  router.get('./cluster', cluster)
}