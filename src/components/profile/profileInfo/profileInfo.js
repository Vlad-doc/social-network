import React from "react"
import profInfoStyle from "./profileInfo.module.css"
import notFoundPNG from "../../../assets/images/not_found.png"
import ProfileStatus from "./profileStatus"

export const ProfileInfo = (props) => {
  return (
    <div>
      {props.profile ? (
        <>
          <img
            src={
              props.profile.photos.large
                ? props.profile.photos.large
                : notFoundPNG
            }
            alt=""
            width={"200px"}
          />
          <div className={profInfoStyle.description}>
            {props.profile.fullName}
            <ProfileStatus
              status={props.status}
              updateUserStatus={props.updateUserStatus}
            />
          </div>
        </>
      ) : (
        props.profile
      )}
    </div>
  )
}
