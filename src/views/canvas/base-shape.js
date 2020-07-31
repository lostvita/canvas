import React, { useRef, useEffect } from 'react'
import 'scss/canvas/base-shape.scss'

function drawTriangle(dom) {
  if(!dom || !dom.current) return
  const ctx = dom.current.getContext('2d')
  ctx.fillStyle = 'tomato'
  ctx.beginPath()
  ctx.moveTo(59, 37)
  ctx.lineTo(377, 77)
  ctx.lineTo(127, 177)
  ctx.fill()
}

// 参数方程法
function drawOval1(dom, x, y, a, b) {
  if(!dom || !dom.current) return
  const ctx = dom.current.getContext('2d')
  const cr = 1 / 10
  ctx.fillStyle = 'tomato'
  ctx.beginPath()
  ctx.moveTo(x + a, y)
  for (let i = 0; i < 2 * Math.PI; i += cr) {
    ctx.lineTo(x + a * Math.cos(i), y + b * Math.sin(i))
  }
  ctx.closePath()
  ctx.fill()
}

// 圆形压缩法
function drawOval2(dom, x, y, a, b) {
  if(!dom || !dom.current) return
  const ctx = dom.current.getContext('2d')
  const max = a > b ? a : b
  const ratioX = a / max
  const ratioY = b / max
  ctx.fillStyle = 'tomato'
  ctx.save()
  ctx.scale(ratioX, ratioY)
  ctx.beginPath()
  ctx.arc(x / ratioX, y / ratioY, max, 0, Math.PI * 2, false)
  ctx.closePath()
  ctx.restore()
  ctx.fill()
}

function drawOval3(dom, x, y, a, b) {
  if(!dom || !dom.current) return
  const ctx = dom.current.getContext('2d')
  const ox = 0.5 * a,
        oy = 0.6 * b
 
  ctx.save()
  ctx.translate(x, y)
  ctx.beginPath()
  ctx.moveTo(0, b)
  ctx.bezierCurveTo(ox, b, a, oy, a, 0)
  ctx.bezierCurveTo(a, -oy, ox, -b, 0, -b)
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

export default function BaseShape() {
  const $triangle = useRef(null)
  const $oval = useRef(null)
  useEffect(() => {
    drawTriangle($triangle)
    drawOval1($oval, 100, 100, 50, 20)
    drawOval2($oval, 200, 100, 50, 20)
    drawOval3($oval, 300, 100, 50, 20)
  })
  return <div className="base-shape-wrapper">
    <canvas ref={ $triangle } width="400" height="200" className="canvas-triangle"></canvas>
    <canvas ref={ $oval } className="canvas-oval" width="400" height="200"></canvas>
  </div>
}