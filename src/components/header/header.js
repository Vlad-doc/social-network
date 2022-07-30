import React from "react"
import { NavLink } from "react-router-dom"
import headStyle from "./header.module.css"
import socialNetworkImg from "../../assets/images/socialImg.png"

function Header({ login, auth, user }) {
  console.log(user)
  return (
    <header className={headStyle.header}>
      <img src={socialNetworkImg} alt="logo" />
      {auth ? (
        login
      ) : (
        <div className={headStyle.link}>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      )}
    </header>
  )
}

export default Header
