import React from "react"
import stylesUsers from "./styleUsers.module.css"
import userPhoto from "../../assets/images/user.png"
import { NavLink } from "react-router-dom"

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div>
      <div className={stylesUsers.list}>
        {pages.map((page, index) => (
          <span
            key={index}
            className={
              props.currentPage === page ? stylesUsers.list_active : null
            }
            onClick={() => props.onPageChanged(page)}
          >
            {page}
          </span>
        ))}
      </div>
      {props.users.map((user) => (
        <div key={user.id} className={stylesUsers.container}>
          <div className={stylesUsers.buttonBlock}>
            {user.followed ? (
              <button onClick={() => props.unFollow(user.id)}>UnFollow</button>
            ) : (
              <button onClick={() => props.follow(user.id)}>Follow</button>
            )}
          </div>
          <div className={stylesUsers.infoBlock}>
            <div className={stylesUsers.infoBlock__image}>
              <NavLink to={`/profile/${user.id}`}>
                <img
                  src={
                    user.photos.small !== null ? user.photos.small : userPhoto
                  }
                  alt="ava"
                />
              </NavLink>
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
