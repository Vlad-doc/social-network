import React from "react"
import profInfoStyle from "./profileInfo.module.css"
import notFoundPNG from "../../../assets/images/not_found.png"

export const ProfileInfo = ({ profile }) => {
  return (
    <div>
      <img
        className={profInfoStyle.content__img}
        src="https://img2.akspic.ru/attachments/originals/5/2/1/4/0/104125-velikaya_kitajskaya_stena-gornaya_derevnya-orientir-gornyj_relef-chudesa_mira-2560x1706.jpg"
        alt="china_wall"
      />
      {profile ? (
        <>
          <img
            src={profile.photos.large ? profile.photos.large : notFoundPNG}
            alt=""
            width={"200px"}
          />
          <div className={profInfoStyle.description}>{profile.fullName}</div>
        </>
      ) : (
        profile
      )}
    </div>
  )
}
