import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink.js'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about" activeStyle={{color: 'red'}}>About</NavLink></li>
          <li><NavLink to="/repos" activeClassName="active" activeStyle={{color: 'green', textTransform: 'uppercase'}}>Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
