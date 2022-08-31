import React from "react"
import style from "./profileInfo.module.css"
import ProfileStatus from "./profileStatus"
import { objToArr } from "../../../utils/object/objArr"
import ProfileAvatar from "./profileAvatar"

export const ProfileInfo = (props) => {
  return (
    <>
      {props.profile ? (
        <>
          <div className={style.bcImg}> </div>
          <div className={style.content}>
            <ProfileAvatar {...props} />
            <div className={style.description}>
              <div className={style.name}>{props.profile.fullName}</div>
              <div className={style.about}>{props.profile.aboutMe}</div>
              <div className={style.about}>
                {objToArr(props.profile.contacts).map((link, index) => (
                  <a key={index} href={`https://${link}`}>
                    {link} <br />
                  </a>
                ))}
              </div>
              <ProfileStatus
                status={props.status}
                updateUserStatus={props.updateUserStatus}
              />
            </div>
          </div>
        </>
      ) : (
        props.profile
      )}
    </>
  )
}
