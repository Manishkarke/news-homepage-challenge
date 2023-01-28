import React from 'react'
import style from "./Header.module.css"
import NavBar from './NavBar'

function Heading() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img src="./assets/images/logo.svg" alt="Logo of company" />
      </div>

      <NavBar className={style.navbar} /> 
    </header>
  )
}

export default Heading