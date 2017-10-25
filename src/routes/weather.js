import axios from 'axios'

export default async function (ctx) {
  const response = await axios.get('http://aider.meizu.com/app/weather/listWeather?cityIds=101010100')
  const data = response.data.value.indexs
}