import { delay } from 'redux-saga'
import { call } from 'redux-saga/effects'

// Another Saga
export function * helloSaga () {
  yield call(delay, 2000)
  yield call(console.log, 'Hello Redux-Saga!')
}
