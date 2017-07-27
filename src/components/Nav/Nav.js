import React, { Component } from 'react'
import {navStyles as styles} from './navStyles'
import * as gStyles from '../../styleUtils'
import {Link} from 'react-router-dom'
import Radium from 'radium'
import { withRouter } from 'react-router'

class Nav extends Component {
  render () {
    const {location} = this.props
    return (
      <div style={styles.topNavBar}>
        <div style={Object.assign({}, gStyles.rightMargin(30), location.pathname === '/' ? styles.linkItemActive : {})}><Link style={styles.linkItem} to='/'>Home</Link></div>
        <div style={location.pathname === '/posts' ? styles.linkItemActive : {}}><Link style={styles.linkItem} to='/posts'>Posts</Link></div>
      </div>
    )
  }
  }
let routerWrapper = withRouter(Nav)
let radiumWrapper = Radium(routerWrapper)
export {radiumWrapper as Nav}
