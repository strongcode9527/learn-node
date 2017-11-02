
export async function jsonp(ctx) {

  await ctx.render('jsonp', {
    style: 'jsonp'
  })
}

export  function jsonpApi(ctx) {
  console.log(ctx.query)
  ctx.body = `${ctx.query.callback}("jsonp返回数据")`
}