import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './normalize.css'
import {Nav} from './components/Nav/Nav'
import { Home } from './components/Home/Home'
import Posts from './components/Posts/Posts'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import rootSaga from './sagas'

const loggerMiddleware = createLogger()
const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
    sagaMiddleware
  )
)
sagaMiddleware.run(rootSaga)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Nav />
            <Route exact path='/' component={Home} />
            <Route path='/posts' component={Posts} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
