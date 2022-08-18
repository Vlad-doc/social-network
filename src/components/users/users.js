import React from "react"
import stylesUsers from "./styleUsers.module.css"
import userPhoto from "../../assets/images/user.png"
import { Link } from "react-router-dom"
import CustomButton from "../common/button/customButton"
import Paginator from "../common/paginator/paginator"

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      <Paginator
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        onPageChanged={props.onPageChanged}
        currentPage={props.currentPage}
      />
      {props.users.map((user) => (
        <div key={user.id} className={stylesUsers.container}>
          <div className={stylesUsers.buttonBlock}>
            {user.followed ? (
              <CustomButton
                children={"UnFollow"}
                disabled={props.followProgress.some((id) => id === user.id)}
                onClick={() => props.unFollow(user.id)}
              />
            ) : (
              <CustomButton
                children={"Follow"}
                disabled={props.followProgress.some((id) => id === user.id)}
                onClick={() => props.follow(user.id)}
              />
            )}
          </div>
          <div className={stylesUsers.infoBlock}>
            <div className={stylesUsers.infoBlock__image}>
              <Link to={`/profile/${user.id}`}>
                <img
                  src={
                    user.photos.small !== null ? user.photos.small : userPhoto
                  }
                  alt="ava"
                />
              </Link>
            </div>

            <div className={stylesUsers.infoBlock__user}>
              <div className={stylesUsers.infoBlock__user_name}>
                {user.name}
              </div>
              <div>{user.status}</div>
            </div>
            <div className={stylesUsers.infoBlock__location}>
              <div>City: {"user.location.city"}</div>
              <div>Country: {"user.location.country"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users
