import React from "react"

const Users = ({ users, follow, unFollow }) => {
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <div>
            <img src={user.photo} alt="ava" width={"50px"} />
          </div>
          {user.fullName}
          {user.followed ? (
            <button onClick={() => unFollow(user.id)}> UnFollow </button>
          ) : (
            <button onClick={() => follow(user.id)}> Follow </button>
          )}
        </div>
      ))}
    </div>
  )
}

export default Users
