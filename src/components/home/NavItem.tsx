import React from 'react'
import { Link } from 'react-router-dom'
import { INavItemInfo, pathNormalizer } from '../../utils/images'

const NavItem = (props: INavItemInfo) => {
  const { link, pageName } = props

  const path = pathNormalizer(pageName)
  const to = path === 'home' ? '/' : `${path}`

  return (
    <Link className="nav-link" to={to}>
      <h2 className="nav-link-label rubik-font">{pageName}</h2>
      <img className="nav-link-image" src={link} />
    </Link>
  )
}

export default NavItem
