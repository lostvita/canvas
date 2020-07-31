import React, { Fragment } from 'react'
import 'scss/hc/clip-path.scss'

function ClipPath() {
  return <Fragment>
    <div className="clip-path"></div>
    <div className="area-graphic-wrapper">
      <div className="area-graphic-item area-graphic-one"></div>
      <div className="area-graphic-item area-graphic-two"></div>
    </div>
  </Fragment>
}

export default ClipPath