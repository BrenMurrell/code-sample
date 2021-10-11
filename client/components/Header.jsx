import React from 'react'

import Logo from './Logo'
import Nav from './Nav'

const Header = (props) => {
  return (
    <header className="header header--app">
      <Logo />
      <Nav />
    </header>
  )
}

export default Header
