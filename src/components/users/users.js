import React from "react"
import stylesUsers from "./styleUsers.module.css"
import userPhoto from "../../assets/images/user.png"
import { Link } from "react-router-dom"
import axios from "axios"

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
              <button
                onClick={() => {
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "b918b344-9af7-468d-85fc-eb294e638b71",
                        },
                      },
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.unFollow(user.id)
                      }
                    })
                }}
              >
                UnFollow
              </button>
            ) : (
              <button
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "b918b344-9af7-468d-85fc-eb294e638b71",
                        },
                      },
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.follow(user.id)
                      }
                    })
                }}
              >
                Follow
              </button>
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
