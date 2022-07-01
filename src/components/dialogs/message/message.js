import React from "react"
import dialogsStyle from "./../dialogs.module.css"

export const Message = (props) => {
  return <div className={dialogsStyle.message}>{props.message}</div>
}
