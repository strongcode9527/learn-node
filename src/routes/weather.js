import axios from 'axios'

export default async function (ctx) {
  const response = await axios.get('http://aider.meizu.com/app/weather/listWeather?cityIds=101010100')
  const data = response.data.value[0]
  console.log(data)
  //在render的时候必须 await
  await ctx.render('weather', {
    data,
    style: 'weather'
  })
}

