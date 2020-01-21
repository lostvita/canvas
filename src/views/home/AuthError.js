import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

class AuthError extends Component {
  render(){
    return (
      <DocumentTitle title="Permission Error">
        <div className="view access">
          <div className="access-wrapper">
            <div className="access-group">
              <input type="text" placeholder="输入token" className="access-ctrl" /><button className="access-submit" >访问</button>
            </div>
            <p className="invalid-tip">Token Error</p>
            <p className="access-tips">访问<a href="/front" className="access-link">这里</a>获取token。</p>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default AuthError