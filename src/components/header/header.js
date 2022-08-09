import React from "react"
import headStyle from "./header.module.css"
import socialNetworkImg from "../../assets/images/socialImg.png"
import userPhoto from "../../assets/images/user.png"
import { Link } from "react-router-dom"
import CustomButton from "../common/button/customButton"

function Header(props) {
  const exit = () => props.logout()

  return (
    <header className={headStyle.header}>
      <img src={socialNetworkImg} alt="logo" />
      {props.auth ? (
        props.userAuth ? (
          <div className={headStyle.userProfile}>
            <div>
              <div>
                <Link to={`/profile/${props.userAuth.userId}`}>
                  <img
                    className={headStyle.ava}
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
              <CustomButton children="Logout" onClick={exit} />
            </div>
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
