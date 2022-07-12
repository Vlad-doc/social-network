import React from "react"
import dialogsStyle from "./dialogs.module.css"
import { DialogItem } from "./dialogItem/dialogItem"
import { Message } from "./message/message"
import {
  sendMessageCreator,
  newMessageCreator,
} from "../../redux/dialogsReducer"

function Dialogs({ state, dispatch }) {
  const sendMessage = () => {
    dispatch(sendMessageCreator())
  }
  const onMessageChange = (e) => {
    dispatch(newMessageCreator(e.target.value))
  }
  return (
    <div className={dialogsStyle.dialogs}>
      <div className={dialogsStyle.dialogItems}>
        {state.dialogs.map((dialog) => (
          <DialogItem id={`${dialog.id}`} key={dialog.id} profile={dialog} />
        ))}
      </div>
      <div className={dialogsStyle.messages}>
        {state.messages.map((message) => (
          <Message id={message.id} message={message.message} key={message.id} />
        ))}
        <div className={dialogsStyle.textArea}>
          <textarea
            value={state.newMessageText}
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
