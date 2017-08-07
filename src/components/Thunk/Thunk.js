import React from 'react'
import {
  fetchPosts
} from '../../actions'
import { connect } from 'react-redux'
import spinner from './spinner.gif'
import {thunkStyles as styles} from './thunkStyles'

export const PostsUI = ({posts, isFetching, onGetPostsClick}) => {
  let spinnerElm = isFetching ? <img src={spinner} alt='spinner' /> : null
  return (
    <div style={styles.mainContainer}>
      <div>
        <button onClick={onGetPostsClick} style={styles.button}>Get Posts</button>
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
    onGetPostsClick: () => {
      dispatch(fetchPosts())
    }
  }
}

const Posts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsUI)

export default Posts
