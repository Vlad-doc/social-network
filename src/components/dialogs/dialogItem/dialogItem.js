import React from "react"
import { NavLink } from "react-router-dom"
import dialogsStyle from "./../dialogs.module.css"

export const DialogItem = (props) => {
  return (
    <div className={dialogsStyle.dialog}>
      <NavLink to={props.id}>{props.name}</NavLink>
    </div>
  )
}
