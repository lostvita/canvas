import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from  'redux'
import { Provider } from 'react-redux'
import 'scss/common.scss'
import 'scss/index.scss'
import Page from 'Page'
import Reducer from 'store'
import * as serviceWorker from './serviceWorker'
ReactDOM.render(
    <Provider store= { createStore(Reducer) }>
        <Page />
    </Provider>,
document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
