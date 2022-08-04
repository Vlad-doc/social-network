import React from "react"
import profInfoStyle from "./profileInfo.module.css"
import notFoundPNG from "../../../assets/images/not_found.png"
import ProfileStatus from "./profileStatus"

export const ProfileInfo = ({ profile }) => {
  return (
    <div>
      {profile ? (
        <>
          <img
            src={profile.photos.large ? profile.photos.large : notFoundPNG}
            alt=""
            width={"200px"}
          />
          <div className={profInfoStyle.description}>
            {profile.fullName}
            <ProfileStatus status="Hello my friends" />
          </div>
        </>
      ) : (
        profile
      )}
    </div>
  )
}
