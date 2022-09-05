import React from "react"
import style from "./header.module.css"
import socialNetworkImg from "../../assets/images/socialImg.png"
import notFoundPNG from "../../assets/images/not_found.png"
import logoutIMG from "../../assets/images/logout.png"
import { Link } from "react-router-dom"

function Header({ profile, logout, authUser }) {
  let exit = () => logout()
  return (
    <header className={style.header}>
      <img src={socialNetworkImg} alt="logo" className={style.socialIMG} />
      {authUser.isAuth ? (
        profile === null ? (
          <div>Loading...</div>
        ) : (
          <div className={style.userProfile}>
            <div className={style.description}>
              <div>
                <Link to={`/profile/${profile.userId}`}>
                  <img
                    className={style.ava}
                    src={
                      profile.photos.small !== null
                        ? profile.photos.small
                        : notFoundPNG
                    }
                    alt="ava"
                  />
                </Link>
              </div>
              <div className={style.userName}>{profile.fullName}</div>
            </div>
            <div>
              <button className={style.btn} onClick={exit}>
                <img src={logoutIMG} alt="logout" />
              </button>
            </div>
          </div>
        )
      ) : (
        <div className={style.link}>
          <Link to={"/login"}>L</Link>
        </div>
      )}
    </header>
  )
}

export default Header
