import React from "react"
import headStyle from "./header.module.css"
import socialNetworkImg from "../../assets/images/socialImg.png"
import userPhoto from "../../assets/images/user.png"
import { Link } from "react-router-dom"

function Header({ auth, userAuth }) {
  return (
    <header className={headStyle.header}>
      <img src={socialNetworkImg} alt="logo" />
      {auth ? (
        userAuth ? (
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
          <div>Loading...</div>
        )
      ) : (
        <div className={headStyle.link}>
          <Link to={"/login"}>Login</Link>
        </div>
      )}
    </header>
  )
}

export default Header
