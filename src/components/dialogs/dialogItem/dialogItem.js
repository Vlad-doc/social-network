import React from "react"
import { NavLink } from "react-router-dom"
import dialogsStyle from "./../dialogs.module.css"

export const DialogItem = ({ profile }) => {
  return (
    <div className={dialogsStyle.dialog}>
      <img src={profile.avatar} alt="avatar" />
      <NavLink to={`/dialogs/${profile.id}`}>{profile.name}</NavLink>
    </div>
  )
}
