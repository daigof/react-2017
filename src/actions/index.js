import axios from 'axios'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export function requestPosts () {
  return {
    type: REQUEST_POSTS
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export function receivePosts (items) {
  return {
    type: RECEIVE_POSTS,
    items,
    receivedAt: Date.now()
  }
}

// Saga wise
export const FETCH_POSTS_SAGA = 'FETCH_POSTS_SAGA'
export function fetchPostsSaga (items) {
  return {
    type: FETCH_POSTS_SAGA
  }
}

// Thunk wise
export function fetchPosts () {
  return (dispatch) => {
    dispatch(requestPosts())

    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(
        response => {
          console.log('---THUNK--- RESPONSE OBJ', response)
          dispatch(receivePosts(response.data))
        },
        error => console.log('An error occured.', error)
      )
  }
}
