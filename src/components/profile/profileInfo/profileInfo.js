import React from "react"
import profInfoStyle from "./profileInfo.module.css"
import notFoundPNG from "../../../assets/images/not_found.png"
import ProfileStatus from "./profileStatus"
import { Avatar, Image } from "antd"

export const ProfileInfo = (props) => {
  return (
    <>
      {props.profile ? (
        <>
          <div className={profInfoStyle.bcImg}> </div>
          <div className={profInfoStyle.content}>
            {/* <img
              src={
                props.profile.photos.large
                  ? props.profile.photos.large
                  : notFoundPNG
              }
              alt=""
              width={"200px"}
            /> */}
            <Avatar
              src={
                <Image
                  src={
                    props.profile.photos.large
                      ? props.profile.photos.large
                      : notFoundPNG
                  }
                  style={{ width: "100%", height: "100%" }}
                />
              }
              size={170}
              style={{ backgroundColor: "#f5f5f5" }}
            />
            <div className={profInfoStyle.description}>
              <div className={profInfoStyle.name}>{props.profile.fullName}</div>
              <div className={profInfoStyle.about}>{props.profile.aboutMe}</div>
              <div className={profInfoStyle.about}>
                {/* {Array.from( props.profile.contacts).filter((contact !== null) => {})} */}
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
