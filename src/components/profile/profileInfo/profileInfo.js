import React from "react"
import style from "./profileInfo.module.css"
import ProfileStatus from "./profileStatus"

import ProfileAvatar from "./profileAvatar"
import ProfileDesc from "./profileDesc"

export const ProfileInfo = (props) => {
  return (
    <>
      {props.profile ? (
        <>
          <div className={style.bcImg}> </div>
          <div className={style.content}>
            <ProfileAvatar {...props} />
            <ProfileDesc {...props} />
            <ProfileStatus
              status={props.status}
              updateUserStatus={props.updateUserStatus}
            />
          </div>
        </>
      ) : (
        props.profile
      )}
    </>
  )
}
