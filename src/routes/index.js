import weather from './weather'
import {jsonp, jsonpApi} from './jsonp'


export default function(router){
  router.get('/',async function (ctx) {
    await ctx.render('index')
  })
  router.get('/weather', weather)
  router.get('/jsonp', jsonp )
  router.get('/jsonp/api', jsonpApi)
}