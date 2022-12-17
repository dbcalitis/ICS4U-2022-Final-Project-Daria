import React from 'react'
import style from './Navbar.css'

function Navbar() {
  return (
    <div className="navBar" style={style}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#comics">Comics</a>
    </div>
  )
}

export default Navbar
