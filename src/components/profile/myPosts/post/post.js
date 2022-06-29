import React from "react"
import postStyle from "./post.module.css"

function Post(props) {
  return (
    <div className={postStyle.item}>
      <img
        className={postStyle.item__img}
        src="https://findicons.com/files/icons/1072/face_avatars/300/i03.png"
        alt="avatar"
      />
      {props.message} <br />
      {props.likesCount} <span style={{ color: "red" }}>likes</span>
    </div>
  )
}

export default Post
