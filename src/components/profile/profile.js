import React from "react"
import { ProfileInfo } from "./profileInfo/profileInfo"
import profStyle from "./profile.module.css"
import MyPostsContainer from "./myPosts/myPostsContainer"

// import Friends from "../friends/friends"

function Profile(props) {
  console.log(props)
  console.log(props.params.userId)
  if (!props.userAuth.isAuth && props.params.userId === null) return null

  return (
    <div className={profStyle.content}>
      <ProfileInfo
        {...props}
        profile={props.profile.profile}
        status={props.status}
        updateUserStatus={props.updateUserStatus}
        setPhoto={props.setPhoto}
        setProfileData={props.setProfileData}
      />
      <div className={profStyle.friendsBlock}>
        <MyPostsContainer
          {...props}
          posts={props.profile.posts}
          addPostText={props.addPostText}
        />
        {/* <Friends /> */}
      </div>
    </div>
  )
}

export default Profile
