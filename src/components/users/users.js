import React from "react"
import stylesUsers from "./styleUsers.module.css"

const Users = ({ users, follow, unFollow, setUsers }) => {
  if (users.length === 0) {
    setUsers([
      {
        id: 1,
        fullName: "Vlad",
        photo: "https://www.freeiconspng.com/uploads/face-avatar-icon-21.png",
        followed: false,
        status: "I am a boss",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 2,
        fullName: "Teo",
        photo: "https://www.freeiconspng.com/uploads/face-avatar-icon-21.png",
        followed: true,
        status: "I am a cool",
        location: { city: "Madrid", country: "Spain" },
      },
    ])
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
              <img src={user.photo} alt="ava" />
            </div>

            <div className={stylesUsers.infoBlock__user}>
              <div className={stylesUsers.infoBlock__user_name}>
                {user.fullName}
              </div>
              <div>{user.status}</div>
            </div>
            <div className={stylesUsers.infoBlock__location}>
              <div>City: {user.location.city}</div>
              <div>Country: {user.location.country}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users
