import React from "react"
import style from "./friends.module.css"

export const Friend = ({ friend }) => {
  return (
    <div className={style.item__friends_friend}>
      <img src={friend.avatar} alt="ava" />
      <div>{friend.name}</div>
    </div>
  )
}

export default Friend
