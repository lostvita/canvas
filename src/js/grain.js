/**
 * canvas粒子
 */

const COLORS = ['#fff1ac', '#b689b0', '#121b74', '#ff8a5c', '#f5587b', '#9dd3a8', '#8134af']
const RADIUS = 3

class Grain {
  constructor(ctx, x, y, type, model) {
    if (!ctx || typeof ctx === 'number') {
      throw Error('Missing canvas context.')
    }
    this._ctx = ctx
    this._x = x || 0
    this._y = y || 0
    this._type = type || 'ball'
    this._model = model || 'static'
    this._color = COLORS[Math.floor(Math.random() * COLORS.length)]
    this._radius = type === 'ball' ? 1.1 : 3.3 + RADIUS * Math.random()
  }

  draw() {
    switch(this._type) {
      case 'ball': {
        this._drawBall()
        break
      }
      case 'rect': {
        this._drawRect()
        break
      }
      default: this._drawBall()
    }
  }

  _drawBall() {
    const _ctx = this._ctx
    _ctx.save()
    _ctx.fillStyle = this._color
    _ctx.beginPath()
    _ctx.arc(this._x, this._y, this._radius, Math.PI * 2, false)
    _ctx.closePath()
    _ctx.fill()
    _ctx.restore()
    
  }

  _drawRect() {
    const _ctx = this._ctx
    _ctx.save()
    _ctx.fillStyle = this._color
    _ctx.beginPath()
    _ctx.fillRect(this._x, this._y, this._radius, this._radius)
    _ctx.closePath()
    _ctx.fill()
    _ctx.restore()
  }
}

export default Grain