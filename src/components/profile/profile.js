import React from "react"
import MyPosts from "./myPosts/myPosts"
import profStyle from "./profile.module.css"

function Profile() {
  return (
    <div className={profStyle.content}>
      <img
        className={profStyle.content__img}
        src="https://img2.akspic.ru/attachments/originals/5/2/1/4/0/104125-velikaya_kitajskaya_stena-gornaya_derevnya-orientir-gornyj_relef-chudesa_mira-2560x1706.jpg"
        alt="china_wall"
      />

      <div>ava + description</div>
      <MyPosts />
    </div>
  )
}

export default Profile
