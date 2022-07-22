import axios from "axios"
import React from "react"
import stylesUsers from "./styleUsers.module.css"
import userPhoto from "../../assets/images/user.png"

const Users = ({ users, follow, unFollow, setUsers }) => {
  if (users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        setUsers(response.data.items)
      })
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} className={stylesUsers.container}>
          <div className={stylesUsers.buttonBlock}>
            {user.followed ? (
              <button onClick={() => unFollow(user.id)}> UnFollow </button>
            ) : (
              <button onClick={() => follow(user.id)}> Follow </button>
            )}
          </div>
          <div className={stylesUsers.infoBlock}>
            <div className={stylesUsers.infoBlock__image}>
              <img
                src={user.photos.small !== null ? user.photos.small : userPhoto}
                alt="ava"
              />
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
