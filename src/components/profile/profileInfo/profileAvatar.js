import React from "react"
import { Avatar, Image } from "antd"
import notFoundPNG from "../../../assets/images/not_found.png"

const ProfileAvatar = ({ profile, setPhoto, auth }) => {
  console.log(profile)
  console.log(auth)
  const changePhoto = (e) => {
    setPhoto(e.target.files[0])
    console.log(e.target.files[0])
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
      {auth ? (
        <label
          style={{
            display: "block",
            width: "20px",
            height: "10px",
            border: "1px solid black",
            background: "red",
            position: "relative",
            top: "-15px",
            left: "75px",
            cursor: "pointer",
          }}
        >
          <input
            accept="image/png, image/jpeg"
            type={"file"}
            onChange={changePhoto}
            style={{ display: "none" }}
          />
        </label>
      ) : null}
    </>
  )
}

export default ProfileAvatar
