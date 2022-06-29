import React from "react"
import profStyle from "./profile.module.css"

function Profile() {
  return (
    <div className={profStyle.content}>
      <div>
        <img
          src="https://img2.akspic.ru/attachments/originals/5/2/1/4/0/104125-velikaya_kitajskaya_stena-gornaya_derevnya-orientir-gornyj_relef-chudesa_mira-2560x1706.jpg"
          alt="china_wall"
        />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New post</div>
        <div className="posts">
          <div className={profStyle.item}>post 1</div>
          <div className={profStyle.item}>post 2</div>
        </div>
      </div>
    </div>
  )
}

export default Profile
