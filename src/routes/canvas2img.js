const fs = require('fs')
const {Scene, Path, Sprite} = require('spritejs')
const {createCanvas} = require('canvas')

export default async function(ctx) {


  const scene = new Scene('#svgpath', {resolution: [1540, 600]})
  const layer = scene.layer('fglayer')
  

  const p0 = new Sprite()
  p0.attr({
    anchor: 0,
    size: [1540, 600],
    bgcolor: 'red',
  })

  layer.appendChild(p0)

  const p1 = new Path()
  p1.attr({
    path: {
      d: 'M280,250A200,200,0,1,1,680,250A200,200,0,1,1,280,250Z',
      transform: {
        scale: 0.5,
      },
      trim: true,
    },
    strokeColor: '#033',
    fillColor: '#839',
    lineWidth: 12,
    pos: [100, 50],
  })

  layer.appendChild(p1)

  const p2 = new Path()
  p2.attr({
    path: {
      d: 'M480,50L423.8,182.6L280,194.8L389.2,289.4L356.4,430L480,355.4L480,355.4L603.6,430L570.8,289.4L680,194.8L536.2,182.6Z',
      transform: {
        rotate: 45,
      },
      trim: true,
    },
    fillColor: '#ed8',
    pos: [450, 100],
  })
  layer.appendChild(p2)

  const p3 = new Path()
  p3.attr({
    path: {
      d: 'M480,437l-29-26.4c-103-93.4-171-155-171-230.6c0-61.6,48.4-110,110-110c34.8,0,68.2,16.2,90,41.8C501.8,86.2,535.2,70,570,70c61.6,0,110,48.4,110,110c0,75.6-68,137.2-171,230.8L480,437z',
      trim: true,
    },
    strokeColor: '#f37',
    lineWidth: 20,
    lineJoin: 'round',
    lineCap: 'round',
    pos: [1000, 100],
  })
  layer.appendChild(p3)
  
  ;(async function () {
    const canvas = await scene.snapshot()
    fs.writeFileSync('snap.png', canvas.toBuffer())
  }())



  ctx.body = '正在生成图片，请稍等。。。。'
}