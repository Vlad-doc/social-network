import React from "react"
import { ProfileInfo } from "./profileInfo/profileInfo"
import profStyle from "./profile.module.css"
import MyPostsContainer from "./myPosts/myPostsContainer"

// function Profile({ store }) {
//   return (
//     <div className={profStyle.content}>
//       <ProfileInfo />
//       <MyPostsContainer store={store} />
//     </div>
//   )
// }
function Profile() {
  return (
    <div className={profStyle.content}>
      <ProfileInfo />

      <MyPostsContainer />
    </div>
  )
}

export default Profile
