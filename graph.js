//run with `electro graph.js T`

var naca = require('./')
var t = +process.argv[2] || 0.15

var canvas = document.createElement('canvas')

canvas.width = window.innerWidth - 100
canvas.height = canvas.width * t + 10
//window.innerHeight - 100


document.body.appendChild(canvas)


//canvas.style.border = '1px black solid'

var ctx = canvas.getContext('2d')
var mid = canvas.height/2
var width = canvas.width

ctx.beginPath()
ctx.moveTo(0, mid)
ctx.lineTo(width, mid)
ctx.stroke()


function draw(side) {
  ctx.beginPath()
  ctx.moveTo(0, mid)

  var n = 200, max = 0, intersect = 0
  for(var i = 0; i <= n; i++) {
    var x = i/n
    var y = naca(t, x)
    ctx.lineTo(canvas.width * x, mid + y*width*side)
    if(y > max)
      max = y
    else if(y > 0)
      intersect = x
    // (multiply output by width, so shape is in proportion)
  }

  ctx.stroke()
}
draw(1)
draw(-1)

var data = canvas.toDataURL('image/png')
require('fs').writeFileSync('output.png', Buffer.from(data.substring(data.indexOf(',')), 'base64'))

