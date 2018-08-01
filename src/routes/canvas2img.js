const fs = require('fs')
const {Scene, Label} = require('spritejs')

export default async function(ctx) {


  const scene = new Scene('#test', 800, 600)
  
  const bglayer = scene.layer('bg', {handleEvent: false})
  
  const text = new Label('Hello Sprite!')
  
  text.attr({
    anchor: [0.5, 0.5],
    pos: [400, 300],
    font: '46px Arial',
    color: 'blue',
    bgcolor: 'white',
    textAlign: 'center',
  })
  
  bglayer.append(text)
  
  ;(async function () {
    const canvas = await scene.snapshot()
    fs.writeFileSync('snap.png', canvas.toBuffer())
  }())

  ctx.body = '正在生成图片，请稍等。。。。'
}