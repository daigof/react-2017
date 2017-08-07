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

export function fetchPosts () {
  return (dispatch) => {
    dispatch(requestPosts())

    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(
        response => {
          console.log(response)
          dispatch(receivePosts(response.data))
        },
        error => console.log('An error occured.', error)
      )
  }
}
