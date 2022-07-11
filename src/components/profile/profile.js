import React from "react"
import MyPosts from "./myPosts/myPosts"
import { ProfileInfo } from "./profileInfo/profileInfo"
import profStyle from "./profile.module.css"

function Profile({ state, dispatch }) {
  return (
    <div className={profStyle.content}>
      <ProfileInfo />
      <MyPosts state={state} dispatch={dispatch} />
    </div>
  )
}

export default Profile
