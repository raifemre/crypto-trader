import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ExportImport } from './ExportImport'

export default class Navigation extends Component {
  render() {
    return (
      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <div className='container nav-container'>
          <div className='navbar-header'>
            <a className="navbar-brand" href='https://github.com/aastein/crypto-trader'>
              <img alt='logo' className='navbar-brand-img' height='50' src='https://avatars0.githubusercontent.com/u/18291415?v=3&s=460'/>
            </a>
          </div>
          <div className='navbar'>
            <ul className='nav navbar-nav'>
              <li>
                <NavLink exact activeClassName='active' to='/'>Login</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName='active' to='/dashboard'>Dashboard</NavLink>
              </li>
            </ul>
            <ExportImport />
          </div>
        </div>
      </nav>
    )
  }
}