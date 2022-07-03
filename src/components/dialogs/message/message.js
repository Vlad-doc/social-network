import React from "react"
import dialogsStyle from "./../dialogs.module.css"

export const Message = ({ message }) => {
  return <div className={dialogsStyle.message}>{message}</div>
}
