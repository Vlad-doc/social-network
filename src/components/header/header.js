import React from "react"
import style from "./header.module.css"
import socialNetworkImg from "../../assets/images/socialImg.png"
import notFoundPNG from "../../assets/images/not_found.png"
import logout from "../../assets/images/logout.png"
import { Link } from "react-router-dom"

function Header(props) {
  let exit = () => props.logout()
  return (
    <header className={style.header}>
      <img src={socialNetworkImg} alt="logo" className={style.socialIMG} />
      {props.auth ? (
        props.userAuth ? (
          <div className={style.userProfile}>
            <div className={style.description}>
              <div>
                <Link to={`/profile/${props.userAuth.userId}`}>
                  <img
                    className={style.ava}
                    src={
                      props.userAuth.photos.small !== null
                        ? props.userAuth.photos.small
                        : notFoundPNG
                    }
                    alt="ava"
                  />
                </Link>
              </div>
              <div className={style.userName}>{props.userAuth.fullName}</div>
            </div>
            <div>
              <button className={style.btn} onClick={exit}>
                <img src={logout} alt="logout" />
              </button>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
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
