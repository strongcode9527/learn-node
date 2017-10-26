import weather from './weather'

export default function(router){
  router.get('/',async function (ctx) {
    await ctx.render('index')
  })
  router.get('/weather', weather)
}