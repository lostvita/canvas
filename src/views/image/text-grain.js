import React, { Component } from 'react'
import 'scss/text-grain.scss'

class TextGrain extends Component {
    render () {
        return (
            <div className="view text-grain">
                <section className="control">
                  <h3 className="title">文字粒子 <i className="icomoon icon-menu close" /></h3>
                  <div className="form-group">
                    <input className="from-ipt-text" placeholder="文字" />
                  </div>
                </section>
                <section className="display">canvas</section>
            </div>
        )
    }
}

export default TextGrain