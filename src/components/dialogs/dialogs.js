import React from "react"
import dialogsStyle from "./dialogs.module.css"
import { DialogItem } from "./dialogItem/dialogItem"
import { Message } from "./message/message"

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
