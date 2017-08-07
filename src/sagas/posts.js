import { put, takeEvery, call } from 'redux-saga/effects'
import * as actions from '../actions'
import axios from 'axios'

// Our worker Saga: will perform the async task
export function * fetchPosts () {
  yield put(actions.requestPosts())
  const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts')
  console.log('---SAGA--- RESPONSE OBJ', response)
  yield put(actions.receivePosts(response.data))
}

// Our watcher Saga: spawn a new fetch on each FETCH_POSTS_SAGA
export function * watchFetchPosts () {
  yield takeEvery(actions.FETCH_POSTS_SAGA, fetchPosts)
}
