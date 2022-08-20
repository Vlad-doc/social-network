import React from "react"
import profInfoStyle from "./profileInfo.module.css"
import notFoundPNG from "../../../assets/images/not_found.png"
import ProfileStatus from "./profileStatus"
import { Avatar, Image } from "antd"
import { objToArr } from "../../../utils/object/objArr"

export const ProfileInfo = (props) => {
  console.log(props)
  return (
    <>
      {props.profile ? (
        <>
          <div className={profInfoStyle.bcImg}> </div>
          <div className={profInfoStyle.content}>
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
