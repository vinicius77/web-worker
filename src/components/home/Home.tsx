import React, { useEffect } from 'react'
import NavItem from './NavItem'
import './home.css'

import { navItems } from '../../utils/images'
import RoundButton from './RoundButton'

const Star = () => {
  const animateStars = () => {
    let index = 0
    let interval = 1000

    const rand = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const stars = document.getElementsByClassName(
      'magic-star'
    ) as HTMLCollectionOf<HTMLElement>

    const animate = (star: HTMLElement) => {
      star.style.setProperty('--star-left', `${rand(-10, 100)}%`)
      star.style.setProperty('--star-top', `${rand(-40, 80)}%`)

      star.style.animation = 'none'
      star.offsetHeight // Dom reflow
      star.style.animation = ''
    }

    for (const star of stars) {
      setTimeout(() => {
        animate(star)
        setInterval(() => animate(star), 1000)
      }, index++ * (interval / 3))
    }
  }

  useEffect(() => {
    animateStars()
  }, [])

  return (
    <span className="magic-star">
      <svg viewBox="0 0 512 512">
        <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
      </svg>
    </span>
  )
}

const Home = () => {
  return (
    <div>
      <main>
        <h2>
          This is{' '}
          <span className="magic">
            {Array(3)
              .fill('F')
              .map((_i, index) => (
                <Star key={index} />
              ))}
            <span className="magic-text">something I want to</span>
          </span>{' '}
          write here
        </h2>
      </main>
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
