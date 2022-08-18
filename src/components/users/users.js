import React from "react"
import stylesUsers from "./styleUsers.module.css"
import Paginator from "../common/paginator/paginator"
import User from "./user"

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
          <User
            user={user}
            followProgress={props.followProgress}
            unFollow={props.unFollow}
            follow={props.follow}
          />
        </div>
      ))}
    </div>
  )
}

export default Users
