import React from "react"
import style from "./header.module.css"
import socialNetworkImg from "../../assets/images/socialImg.png"
import logoutIMG from "../../assets/images/logout.png"
import { Link } from "react-router-dom"

function Header({ logout, authUser }) {
  let exit = () => logout()
  return (
    <header className={style.header}>
      <img src={socialNetworkImg} alt="logo" className={style.socialIMG} />
      {authUser.isAuth ? (
        <div className={style.userProfile}>
          <div className={style.description}>
            <div className={style.userName}>{authUser.login}</div>
          </div>
          <div>
            <button className={style.btn} onClick={exit}>
              <img src={logoutIMG} alt="logout" />
            </button>
          </div>
        </div>
      ) : (
        <div className={style.link}>
          <Link to={"/login"}>L</Link>
        </div>
      )}
    </header>
  )
}

export default Header
