import React from "react"
import MyPosts from "./myPosts/myPosts"
import { ProfileInfo } from "./profileInfo/profileInfo"
import profStyle from "./profile.module.css"

function Profile({ state }) {
  return (
    <div className={profStyle.content}>
      <ProfileInfo />
      <MyPosts posts={state.posts} />
    </div>
  )
}

export default Profile
