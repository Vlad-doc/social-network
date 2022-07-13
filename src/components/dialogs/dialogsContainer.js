import React from "react"
import {
  sendMessageCreator,
  newMessageCreator,
} from "../../redux/dialogsReducer"
import Dialogs from "./dialogs"

function DialogsContainer({ store }) {
  const sendMessage = () => {
    store.dispatch(sendMessageCreator())
  }
  const onMessageChange = (event) => {
    store.dispatch(newMessageCreator(event))
  }
  return (
    <Dialogs
      sendMessageCreator={sendMessage}
      updateMessageBody={onMessageChange}
      dialogs={store.getState().dialogsPage.dialogs}
      messages={store.getState().dialogsPage.messages}
      newMessageText={store.getState().dialogsPage.newMessageText}
    />
  )
}

export default DialogsContainer
