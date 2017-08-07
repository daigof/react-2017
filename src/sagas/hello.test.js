import {helloSaga} from './hello'
import { delay } from 'redux-saga'
import { call } from 'redux-saga/effects'

it('helloSaga test', () => {
  const gen = helloSaga()
  expect(gen.next().value).toEqual(call(delay, 2000))
  expect(gen.next().value).toEqual(call(console.log, 'Hello Redux-Saga!'))
})
