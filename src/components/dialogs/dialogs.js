import React from "react"
import dialogsStyle from "./dialogs.module.css"
import { DialogItem } from "./dialogItem/dialogItem"
import { Message } from "./message/message"

function Dialogs({ dialogs, messages }) {
  return (
    <div className={dialogsStyle.dialogs}>
      <div className={dialogsStyle.dialogItems}>
        {dialogs.map((dialog) => (
          <DialogItem name={dialog.name} id={`${dialog.id}`} key={dialog.id} />
        ))}
      </div>
      <div className={dialogsStyle.messages}>
        {messages.map((message) => (
          <Message id={message.id} message={message.message} key={message.id} />
        ))}
      </div>
    </div>
  )
}

export default Dialogs
