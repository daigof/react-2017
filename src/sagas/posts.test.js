import {fetchPosts} from './posts'
import { put, call } from 'redux-saga/effects'
import * as actions from '../actions'
import axios from 'axios'
// var MockAdapter = require('axios-mock-adapter')

// // This sets the mock adapter on the default instance
// var mock = new MockAdapter(axios)

// // arguments for reply are (status, data, headers)
// mock.onGet('https://jsonplaceholder.typicode.com/posts').reply(200, 'asd', {
//   'Content-Type': 'application/json'
// })

it('Fetch posts with Saga test', () => {
  const gen = fetchPosts()
  expect(gen.next().value).toEqual(put(actions.requestPosts()))
  expect(gen.next().value).toEqual(call(axios.get, 'https://jsonplaceholder.typicode.com/posts'))
//   expect(gen.next().value).toEqual(put(actions.receivePosts([])))
})
