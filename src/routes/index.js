import weather from './weather'

export default function(router){
  router.get('/',function (ctx) {
    ctx.body = 'hello word'
  })
  router.get('/weather', weather)
}