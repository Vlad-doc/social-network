import React from "react"
import { ProfileInfo } from "./profileInfo/profileInfo"
import profStyle from "./profile.module.css"
import MyPostsContainer from "./myPosts/myPostsContainer"
// import Friends from "../friends/friends"

function Profile(props) {
  return (
    <div className={profStyle.content}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        setPhoto={props.setPhoto}
        auth={props.auth}
      />
      <div className={profStyle.friendsBlock}>
        <MyPostsContainer />
        {/* <Friends /> */}
      </div>
    </div>
  )
}

export default Profile
