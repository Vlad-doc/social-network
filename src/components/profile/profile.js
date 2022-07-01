import React from "react"
import MyPosts from "./myPosts/myPosts"
import { ProfileInfo } from "./profileInfo/profileInfo"
import profStyle from "./profile.module.css"

function Profile() {
  return (
    <div className={profStyle.content}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile
