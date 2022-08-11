import React from "react"
import style from "./header.module.css"
import socialNetworkImg from "../../assets/images/socialImg.png"
import userPhoto from "../../assets/images/user.png"
import { Link } from "react-router-dom"

function Header(props) {
  let exit = () => props.logout()
  return (
    <header className={style.header}>
      <img src={socialNetworkImg} alt="logo" />
      {props.auth ? (
        props.userAuth ? (
          <div className={style.userProfile}>
            <div>
              <div>
                <Link to={`/profile/${props.userAuth.userId}`}>
                  <img
                    className={style.ava}
                    src={
                      props.userAuth.photos.small !== null
                        ? props.userAuth.photos.small
                        : userPhoto
                    }
                    alt="ava"
                  />
                </Link>
              </div>
              <div>{props.userAuth.fullName}</div>
            </div>
            <div>
              <button className={style.btn} onClick={exit}>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )
      ) : (
        <div className={style.link}>
          <Link to={"/login"}>Login</Link>
        </div>
      )}
    </header>
  )
}

export default Header
