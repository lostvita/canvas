/**
 * canvas形状
 */

import Grain from 'js/grain'

const GRID_X = 7
const GRID_Y = 7

class Shape {
  constructor(ctx, width, height, prototype) {
    this._ctx = ctx
    this._w = width
    this._h = height
    this._prototype = prototype
    this.placement = []
    this._generate()
  }

  _generate() {
    const _ctx = this._ctx
    const _w = this._w
    const _h = this._h
    _ctx.clearRect(0, 0, _w, _h)
    _ctx.textAlign = 'center'
    _ctx.font = '188px serif'
    _ctx.fillStyle = '#e59572'
    _ctx.fillText(this._prototype, _w / 2, _h / 2)

    const imgData = _ctx.getImageData(0, 0,_w, _h)
    const buffer32 = new Uint32Array(imgData.data.buffer)
    _ctx.clearRect(0, 0, _w, _h)

    for(let j = 0; j < _h; j += GRID_Y) {
      for(let i = 0; i < _w; i += GRID_X) {
        const index = j * _w +i
        if (buffer32[index]) {
          this.placement.push(new Grain(this._ctx, i, j))
        }
      }
    }
  }
}

export default Shape