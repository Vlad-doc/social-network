import React from "react"
import { NavLink } from "react-router-dom"
import navStyle from "./navbar.module.css"

function Navbar() {
  return (
    <nav className={navStyle.nav}>
      <div className={navStyle.item}>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className={`${navStyle.item} ${navStyle.active}`}>
        <NavLink to="/dialogs">Messages</NavLink>
      </div>
      <div className="item">
        <NavLink to="/news">News</NavLink>
      </div>
      <div className="item">
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className="item">
        <a href="/settings">Settings</a>
      </div>
    </nav>
  )
}

export default Navbar
