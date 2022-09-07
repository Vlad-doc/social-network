import React from "react"
import style from "./profileInfo.module.css"
import ProfileStatus from "./profileIndicators/profileStatus"
import ProfileAvatar from "./profileIndicators/profileAvatar"
import ProfileData from "./profileIndicators/profileData"
import Preloader from "../../common/preloader/preloader"

export const ProfileInfo = (props) => {
  if (!props.profile) return <Preloader />
  return (
    <>
      <div className={style.bcImg}> </div>
      <div className={style.content}>
        <ProfileAvatar
          profile={props.profile}
          setPhoto={props.setPhoto}
          params={props.params}
          userAuth={props.userAuth}
        />
        <ProfileData
          profile={props.profile}
          params={props.params}
          userAuth={props.userAuth}
        />
        <ProfileStatus
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
    </>
  )
}
