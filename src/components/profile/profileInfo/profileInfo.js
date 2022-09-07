import React from "react"
import style from "./profileInfo.module.css"
import ProfileStatus from "./profileStatus"
import ProfileAvatar from "./profileAvatar"
import ProfileData from "./profileData"
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
        <ProfileData profile={props.profile} />
        <ProfileStatus
          status={props.status}
          updateUserStatus={props.updateUserStatus}
        />
      </div>
    </>
  )
}
