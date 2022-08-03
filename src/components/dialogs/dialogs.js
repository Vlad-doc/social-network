import React from "react"
import dialogsStyle from "./dialogs.module.css"
import { DialogItem } from "./dialogItem/dialogItem"
import { Message } from "./message/message"
import { Navigate } from "react-router-dom"

function Dialogs({
  sendMessageCreator,
  newMessageCreator,
  dialogs,
  messages,
  newMessageText,
  isAuth,
}) {
  const sendMessage = () => sendMessageCreator()
  const onMessageChange = (e) => newMessageCreator(e.target.value)
  if (!isAuth) return <Navigate to={"/login"} />
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
