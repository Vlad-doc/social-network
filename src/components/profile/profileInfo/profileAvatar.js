import React from "react"
import style from "./profileInfo.module.css"
import { Avatar, Image } from "antd"
import notFoundPNG from "../../../assets/images/not_found.png"

const ProfileAvatar = ({ profile, setPhoto, ...props }) => {
  const changePhoto = (e) => {
    setPhoto(e.target.files[0])
  }
  return (
    <>
      <Avatar
        src={
          <Image
            src={profile.photos.large || notFoundPNG}
            style={{ width: "100%", height: "100%" }}
          />
        }
        size={170}
        style={{ backgroundColor: "#f5f5f5" }}
      />
      {props.userAuth.isAuth && !props.params.userId && (
        <label className={style.labelAvatar}>
          <input
            accept="image/png, image/jpeg"
            type={"file"}
            onChange={changePhoto}
            style={{ display: "none" }}
          />
        </label>
      )}
    </>
  )
}

export default ProfileAvatar
