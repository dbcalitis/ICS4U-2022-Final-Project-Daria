import React from 'react'
import style from './Navbar.css'

function Navbar() {
  return (
    <div className="navBar" style={style}>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#comics">COMICS</a>
        <a href="#characters">CHARACTERS</a>
    </div>
  )
}

export default Navbar
