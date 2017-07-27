import React from 'react'
import {homeStyles as styles} from './homeStyles'
// import * as gStyles from '../../styleUtils'

export const Home = () => (
  <div style={styles.mainContainer}>
    <p>Welcome, this is a demo app to test some React related and updated libraries. My other React test playground is slighly outdated now (and it was from only Oct.2016!!) but you can check that out as well at <a href='https://github.com/daigof/react-examples'>https://github.com/daigof/react-examples</a></p>
    <p>Libraries used here are (this will grow over time):</p>
    <ul>
      <li>create-react-app</li>
      <li>react-router: Dynamic routing (not static like used to be everywhere)</li>
      <li>Redux with log and thunk middleware for async handling</li>
      <li>Radium for styling</li>
      <li>All Pure JS inline styling pattern. The only CSS is normalize.css for well exactly that normalize browser default styling and some custom body global styles</li>
    </ul>
  </div>
  )
