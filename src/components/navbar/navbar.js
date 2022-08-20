import React from "react"
import { NavLink } from "react-router-dom"
import navStyle from "./navbar.module.css"
import profIcon from "../../assets/images/gg_profile.png"
import newsIcon from "../../assets/images/bx_news.png"
import messageIcon from "../../assets/images/ci_message-circle.png"
import usersIcon from "../../assets/images/bi_people.png"
import musicIcon from "../../assets/images/eva_music-outline.png"
import settingsIcon from "../../assets/images/eva_settings-outline.png"

function Navbar() {
  let activeClass = ({ isActive }) =>
    isActive ? `${navStyle.active}` : `${navStyle.item}`

  return (
    <nav className={navStyle.nav}>
      <div className={navStyle.item}>
        <img src={profIcon} alt="profile" />
        <NavLink to="/profile" className={activeClass}>
          Profile
        </NavLink>
      </div>

      <div className={navStyle.item}>
        <img src={newsIcon} alt="news" />
        <NavLink to="/news" className={activeClass}>
          News
        </NavLink>
      </div>

      <div className={navStyle.item}>
        <img src={messageIcon} alt="message" />
        <NavLink to="/dialogs" className={activeClass}>
          Messages
        </NavLink>
      </div>

      <div className={navStyle.item}>
        <img src={usersIcon} alt="users" />
        <NavLink to="/users" className={activeClass}>
          Users
        </NavLink>
      </div>

      <div className={navStyle.item}>
        <img src={musicIcon} alt="profile" />
        <NavLink to="/music" className={activeClass}>
          Music
        </NavLink>
      </div>

      <div className={navStyle.item}>
        <img src={settingsIcon} alt="settings" />
        <NavLink to="/settings" className={activeClass}>
          Settings
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
