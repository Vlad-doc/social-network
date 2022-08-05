import React from "react"
import { NavLink } from "react-router-dom"
import { Friends } from "./friends/friends"
import navStyle from "./navbar.module.css"
import { connect } from "react-redux/es/exports"

function Navbar(props) {
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
        <NavLink to="/users" className={activeClass}>
          Users
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
        <NavLink to="/settings" className={activeClass}>
          Settings
        </NavLink>
      </div>
      <h4>Friends</h4>
      <div className={navStyle.item__friends}>
        {props.friendsPage.friends.map((friend) => (
          <Friends key={friend.id} id={`${friend.id}`} friend={friend} />
        ))}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  friendsPage: state.friendsPage,
})

export default connect(mapStateToProps)(Navbar)
