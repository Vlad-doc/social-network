import React from "react"
import MyPosts from "./myPosts/myPosts"
import { ProfileInfo } from "./profileInfo/profileInfo"
import profStyle from "./profile.module.css"

function Profile({ posts }) {
  return (
    <div className={profStyle.content}>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  )
}

export default Profile
