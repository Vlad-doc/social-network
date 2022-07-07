import React from "react"
import MyPosts from "./myPosts/myPosts"
import { ProfileInfo } from "./profileInfo/profileInfo"
import profStyle from "./profile.module.css"

function Profile({ state, addPost }) {
  return (
    <div className={profStyle.content}>
      <ProfileInfo />
      <MyPosts state={state} addPost={addPost} />
    </div>
  )
}

export default Profile
