import React from 'react'
import NavItem from './NavItem'
import './home.css'

import { navItems } from '../../utils/images'
import RoundButton from './RoundButton'

const Home = () => {
  return (
    <div>
      <main />
      <nav className="bottom-nav">
        <div id="nav-links">
          {navItems.map(({ link, pageName }) => (
            <NavItem key={link} link={link} pageName={pageName} />
          ))}
        </div>
      </nav>
      <RoundButton />
    </div>
  )
}

export default Home
