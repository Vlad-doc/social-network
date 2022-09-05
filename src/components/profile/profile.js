import React from "react"
import { ProfileInfo } from "./profileInfo/profileInfo"
import profStyle from "./profile.module.css"
import MyPostsContainer from "./myPosts/myPostsContainer"
// import Friends from "../friends/friends"

function Profile(props) {
  return (
    <div className={profStyle.content}>
      <ProfileInfo
        {...props}
        profile={props.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        setPhoto={props.setPhoto}
        userAuth={props.userAuth}
      />
      <div className={profStyle.friendsBlock}>
        <MyPostsContainer {...props} />
        {/* <Friends /> */}
      </div>
    </div>
  )
}

export default Profile
