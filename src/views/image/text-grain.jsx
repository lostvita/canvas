import React, { Component } from 'react'
import Shape from 'js/shape'
import 'scss/text-grain.scss'

class TextGrain extends Component {
  constructor(props) {
    super(props)
    this.$canvasRef = React.createRef()
    this.$boxRef = React.createRef()
  }

  render () {
    return (
      <div className="view text-grain">
        <section className="control">
          <h3 className="title">文字粒子</h3>
          <div className="form-group">
            <input className="from-ipt-text" placeholder="文字" />
          </div>
        </section>
        <section className="display">
          <div className="toolbar"><i className="icomoon icon-menu close" /></div>
          <div className="box" ref={ this.$boxRef }>
            <canvas ref={ this.$canvasRef }></canvas>
          </div>
        </section>
      </div>
    )
  }

  componentDidMount() {
    this.draw()
  }

  draw() {
    const $canvas  = this.$canvasRef.current
    const ctx = $canvas.getContext('2d')
    const $box  = this.$boxRef.current
    const { width, height } = $box.getBoundingClientRect()
    const W = $canvas.width = width
    const H = $canvas.height = height
    const shape = new Shape(ctx, W, H, 'Bye')
    const placement = shape.placement
    for(let i = 0; i < placement.length; i++) {
      placement[i].draw()
    }
  }
}

export default TextGrain