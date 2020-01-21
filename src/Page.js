import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import App from 'App'

const NotFound = lazy(() => import(/* webpackChunkName: "home" */ 'views/home/404'))
const Login = lazy(() => import(/* webpackChunkName: "login" */ 'views/login'))

class Page extends Component {
  render () {
    return (
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" render={ () => <Redirect to="/front/home" push /> } />
              <Route path="/front/404" component={ NotFound }/>
              <Route path="/front/login" render={ () => {
                  const isLogin = true || this.props.user.username
                  return isLogin ?  <Redirect to="/front/home" /> : <Login />
              } } />
              <Route render={ () => <App /> } />
            </Switch>
          </Suspense>
        </Router>
    )
  }
}

const mapStateToProps = (state, owns) => ({
    user: state.user,
    ...owns
})

export default connect(
    mapStateToProps
)(Page)