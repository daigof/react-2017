import React from 'react'
import { fetchPosts, fetchPostsSaga } from '../../actions'
import { connect } from 'react-redux'
import spinner from './spinner.gif'
import {postsStyles as styles} from './postsStyles'

export const PostsUI = ({posts, isFetching, getWithThunkClick, getWithSagaClick}) => {
  let spinnerElm = isFetching ? <img src={spinner} alt='spinner' /> : null
  return (
    <div style={styles.mainContainer}>
      <div>
        <button onClick={getWithThunkClick} style={styles.button}>Get With Thunk</button>
        <button onClick={getWithSagaClick} style={styles.button}>Get With Saga</button>
      </div>
      <div>{spinnerElm}</div>
      <TitleList posts={posts} />
    </div>
  )
}

const TitleList = ({posts}) => {
  const listItems = posts.map((p) =>
    <li key={p.id}>
      {p.title}
    </li>
  )
  return (
    <ul>{listItems}</ul>
  )
}

const mapStateToProps = state => {
  return {
    isFetching: state.posts.isFetching,
    posts: state.posts.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getWithThunkClick: () => {
      dispatch(fetchPosts())
    },
    getWithSagaClick: () => {
      dispatch(fetchPostsSaga())
    }
  }
}

const Posts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsUI)

export default Posts
