import React from "react"
import { NavLink } from "react-router-dom"
import dialogsStyle from "./dialogs.module.css"

const DialogItem = (props) => {
  return (
    <div className={dialogsStyle.dialog}>
      <NavLink to={props.id}>{props.name}</NavLink>
    </div>
  )
}
const Message = (props) => {
  return <div className={dialogsStyle.message}>{props.message}</div>
}

function Dialogs() {
  const dialogs = [
    { id: 1, name: "Valera" },
    { id: 2, name: "Anton" },
    { id: 3, name: "Alex" },
    { id: 4, name: "Mikhail" },
  ]
  const messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "World" },
    { id: 3, message: "You are beautiful" },
    { id: 4, message: "YO" },
  ]
  return (
    <div className={dialogsStyle.dialogs}>
      <div className={dialogsStyle.dialogItems}>
        {dialogs.map((dialog) => (
          <DialogItem name={dialog.name} id={`${dialog.id}`} />
        ))}
      </div>
      <div className={dialogsStyle.messages}>
        {messages.map((message) => (
          <Message id={message.id} message={message.message} />
        ))}
      </div>
    </div>
  )
}

export default Dialogs
