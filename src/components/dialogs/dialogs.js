import React from "react"
import dialogsStyle from "./dialogs.module.css"
import { DialogItem } from "./dialogItem/dialogItem"
import { Message } from "./message/message"

function Dialogs({
  sendMessageCreator,
  updateMessageBody,
  dialogs,
  messages,
  newMessageText,
}) {
  const sendMessage = () => sendMessageCreator()
  const onMessageChange = (e) => updateMessageBody(e.target.value)
  return (
    <div className={dialogsStyle.dialogs}>
      <div className={dialogsStyle.dialogItems}>
        {dialogs.map((dialog) => (
          <DialogItem id={`${dialog.id}`} key={dialog.id} profile={dialog} />
        ))}
      </div>
      <div className={dialogsStyle.messages}>
        {messages.map((message) => (
          <Message id={message.id} message={message.message} key={message.id} />
        ))}
        <div className={dialogsStyle.textArea}>
          <textarea
            value={newMessageText}
            onChange={onMessageChange}
            placeholder="Enter your message"
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
