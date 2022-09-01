import React from "react"
import { objToArr } from "../../../utils/object/objArr"
import style from "./profileInfo.module.css"

const ProfileDesc = (props) => {
  return (
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
    </div>
  )
}

export default ProfileDesc
