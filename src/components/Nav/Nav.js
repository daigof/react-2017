import React, { Component } from 'react'
import {navStyles as styles} from './navStyles'
import * as gStyles from '../../styleUtils'
import {Link} from 'react-router-dom'
import Radium from 'radium'
import { withRouter } from 'react-router'

class Nav extends Component {
  getNavStyle (path, isLast) {
    const {location} = this.props
    return Object.assign({},
      isLast ? {} : gStyles.rightMargin(30),
      location.pathname === path ? styles.linkItemActive : {}
      )
  }
  render () {
    return (
      <div style={styles.topNavBar}>
        <div style={this.getNavStyle('/')}>
          <Link style={styles.linkItem} to='/'>Home</Link>
        </div>
        <div style={this.getNavStyle('/posts', true)}>
          <Link style={styles.linkItem} to='/posts'>Posts</Link>
        </div>
      </div>
    )
  }
  }
let routerWrapper = withRouter(Nav)
let radiumWrapper = Radium(routerWrapper)
export {radiumWrapper as Nav}
