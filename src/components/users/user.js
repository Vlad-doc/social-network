import React from "react"
import userPhoto from "../../assets/images/user.png"
import { Link } from "react-router-dom"
import CustomButton from "../common/button/customButton"
import stylesUsers from "./styleUsers.module.css"

const User = ({ user, followProgress, follow, unFollow }) => {
  return (
    <>
      <div className={stylesUsers.buttonBlock}>
        {user.followed ? (
          <CustomButton
            children={"UnFollow"}
            disabled={followProgress.some((id) => id === user.id)}
            onClick={() => unFollow(user.id)}
          />
        ) : (
          <CustomButton
            children={"Follow"}
            disabled={followProgress.some((id) => id === user.id)}
            onClick={() => follow(user.id)}
          />
        )}
      </div>
      <div className={stylesUsers.infoBlock}>
        <div className={stylesUsers.infoBlock__image}>
          <Link to={`/profile/${user.id}`}>
            <img
              src={user.photos.small !== null ? user.photos.small : userPhoto}
              alt="ava"
            />
          </Link>
        </div>

        <div className={stylesUsers.infoBlock__user}>
          <div className={stylesUsers.infoBlock__user_name}>{user.name}</div>
          <div>{user.status}</div>
        </div>
        <div className={stylesUsers.infoBlock__location}>
          <div>City: {"user.location.city"}</div>
          <div>Country: {"user.location.country"}</div>
        </div>
      </div>
    </>
  )
}
export default User
