import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className="nav nav--header">
      <NavLink className="nav__link" activeClassName="nav__link--active" to="/albums">Albums</NavLink>
      <NavLink className="nav__link" activeClassName="nav__link--active" to="/artists">Artists</NavLink>
      {/* <NavLink className="nav__link" activeClassName="nav__link--active" to="/login">Login</NavLink> */}
    </nav>
  )
}

export default Nav
