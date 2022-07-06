import React from "react"
import dialogsStyle from "./dialogs.module.css"
import { DialogItem } from "./dialogItem/dialogItem"
import { Message } from "./message/message"

function Dialogs({ state }) {
  return (
    <div className={dialogsStyle.dialogs}>
      <div className={dialogsStyle.dialogItems}>
        {state.dialogs.map((dialog) => (
          <DialogItem
            id={`${dialog.id}`}
            key={dialog.id}
            // avatar={dialog.avatar}
            // name={dialog.name}
            profile={dialog}
          />
        ))}
      </div>
      <div className={dialogsStyle.messages}>
        {state.messages.map((message) => (
          <Message id={message.id} message={message.message} key={message.id} />
        ))}
      </div>
    </div>
  )
}

export default Dialogs
