import React from "react"
import { ProfileInfo } from "./profileInfo/profileInfo"
import profStyle from "./profile.module.css"
import MyPostsContainer from "./myPosts/myPostsContainer"

function Profile({ profile }) {
  return (
    <div className={profStyle.content}>
      <ProfileInfo profile={profile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
