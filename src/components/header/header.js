import React from "react"
import { NavLink } from "react-router-dom"
import headStyle from "./header.module.css"
import socialNetworkImg from "../../assets/images/socialImg.png"
import userPhoto from "../../assets/images/user.png"
import { Link } from "react-router-dom"

function Header({ login, auth, userAuth }) {
  if (!userAuth) {
    return "Loading..."
  }
  console.log(userAuth.fullName)
  return (
    <header className={headStyle.header}>
      <img src={socialNetworkImg} alt="logo" />
      {auth ? (
        <div className={headStyle.userProfile}>
          <div>
            <Link to={`/profile/${userAuth.userId}`}>
              <img
                src={
                  userAuth.photos.small !== null
                    ? userAuth.photos.small
                    : userPhoto
                }
                alt="ava"
              />
            </Link>
          </div>
          <div>{userAuth.fullName}</div>
        </div>
      ) : (
        <div className={headStyle.link}>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      )}
    </header>
  )
}

export default Header
