import React from "react"
import navStyle from "./navbar.module.css"

function Navbar() {
  return (
    <nav className={navStyle.nav}>
      <div className={navStyle.item}>
        <a>Profile</a>
      </div>
      <div className={`${navStyle.item} ${navStyle.active}`}>
        <a>Messages</a>
      </div>
      <div className="item">
        <a>News</a>
      </div>
      <div className="item">
        <a>Music</a>
      </div>
      <div className="item">
        <a>Settings</a>
      </div>
    </nav>
  )
}

export default Navbar
