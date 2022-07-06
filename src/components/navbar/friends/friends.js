import React from "react"
import navStyle from "../navbar.module.css"

export const Friends = ({ friend }) => {
  return (
    <div className={navStyle.item__friends_friend}>
      <img src={friend.avatar} alt="ava" />
      <div>{friend.name}</div>
    </div>
  )
}
