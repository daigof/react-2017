import {all} from 'redux-saga/effects'
import {watchFetchPosts} from './posts'
import {helloSaga} from './hello'

// single entry point to start all Sagas at once
export default function * rootSaga () {
  yield all([
    helloSaga(),
    watchFetchPosts()
  ])
}
