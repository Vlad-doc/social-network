import React from "react"
import style from "./profileInfo.module.css"
import ProfileStatus from "./profileStatus"
import ProfileAvatar from "./profileAvatar"
import ProfileData from "./profileDesc"
import Preloader from "../../common/preloader/preloader"

export const ProfileInfo = (props) => {
  return (
    <>
      {props.profile ? (
        <>
          <div className={style.bcImg}> </div>
          <div className={style.content}>
            <ProfileAvatar {...props} />
            <ProfileData {...props} />
            <ProfileStatus
              status={props.status}
              updateUserStatus={props.updateUserStatus}
            />
          </div>
        </>
      ) : (
        <Preloader />
      )}
    </>
  )
}
