import React, { createRef } from "react"
import dialogsStyle from "./dialogs.module.css"
import { DialogItem } from "./dialogItem/dialogItem"
import { Message } from "./message/message"
import {
  addNewMessageActionCreator,
  newMessageTextActionCreator,
} from "../../redux/state"

function Dialogs({ state, dispatch }) {
  const sendMessage = () => {
    dispatch(addNewMessageActionCreator())
  }
  const newMessage = createRef()
  const onMessageChange = () => {
    dispatch(newMessageTextActionCreator(newMessage.current.value))
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
            ref={newMessage}
            value={state.defaultText}
            onChange={onMessageChange}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
