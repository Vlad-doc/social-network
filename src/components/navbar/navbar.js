import React from "react"
import { NavLink } from "react-router-dom"
import navStyle from "./navbar.module.css"

function Navbar() {
  let activeClass = ({ isActive }) =>
    isActive ? `${navStyle.active}` : `${navStyle.item}`
  return (
    <nav className={navStyle.nav}>
      <div className={navStyle.item}>
        <NavLink to="/profile" className={activeClass}>
          Profile
        </NavLink>
      </div>
      <div className={navStyle.item}>
        <NavLink to="/dialogs" className={activeClass}>
          Messages
        </NavLink>
      </div>
      <div className={navStyle.item}>
        <NavLink to="/news" className={activeClass}>
          News
        </NavLink>
      </div>
      <div className={navStyle.item}>
        <NavLink to="/music" className={activeClass}>
          Music
        </NavLink>
      </div>
      <div className={navStyle.item}>
        <NavLink to="/" className={activeClass}>
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
