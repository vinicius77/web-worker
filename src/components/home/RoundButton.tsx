import React from 'react'

const RoundButton = () => {
  const toggleNav = (): void => {
    document.body.dataset.nav =
      document.body.dataset.nav === 'true' ? 'false' : 'true'
  }

  return (
    <button id="nav-toggle" type="button" onClick={toggleNav}>
      <i className="open fa-light fa-bars-staggered"></i>
      <i className="close fa-light fa-xmark-large"></i>
    </button>
  )
}

export default RoundButton
