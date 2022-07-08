import React from "react"
import MyPosts from "./myPosts/myPosts"
import { ProfileInfo } from "./profileInfo/profileInfo"
import profStyle from "./profile.module.css"

function Profile({ state, addPost, updateNewPostText }) {
  return (
    <div className={profStyle.content}>
      <ProfileInfo />
      <MyPosts
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </div>
  )
}

export default Profile
