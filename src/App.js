import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './normalize.css'
import {Nav} from './components/Nav/Nav'
import { Home } from './components/Home/Home'
import Thunk from './components/Thunk/Thunk'
import Saga from './components/Saga/Saga'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

let store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path='/' component={Home} />
            <Route path='/thunk' component={Thunk} />
            <Route path='/saga' component={Saga} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
