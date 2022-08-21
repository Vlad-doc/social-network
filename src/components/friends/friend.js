import React from "react"
import style from "./friends.module.css"
import message from "../../assets/images/messIcon.png"

export const Friend = ({ friend }) => {
  return (
    <div className={style.item__friends_friend}>
      <div className={style.info}>
        <img src={friend.avatar} alt="ava" />
        <div className={style.item__friends_friend_name}>{friend.name}</div>
      </div>
      <div className={style.mesBlock}>
        <img src={message} alt="message" />
      </div>
    </div>
  )
}

export default Friend
