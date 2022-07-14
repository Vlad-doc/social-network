import React from "react"
import {
  sendMessageCreator,
  newMessageCreator,
} from "../../redux/dialogsReducer"
import StoreContext from "../../storeContext"
import Dialogs from "./dialogs"

// function DialogsContainer({ store }) {
//   const sendMessage = () => {
//     store.dispatch(sendMessageCreator())
//   }
//   const onMessageChange = (event) => {
//     store.dispatch(newMessageCreator(event))
//   }
//   return (
//     <Dialogs
//       sendMessageCreator={sendMessage}
//       updateMessageBody={onMessageChange}
//       dialogs={store.getState().dialogsPage.dialogs}
//       messages={store.getState().dialogsPage.messages}
//       newMessageText={store.getState().dialogsPage.newMessageText}
//     />
//   )
// }
function DialogsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
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
      }}
    </StoreContext.Consumer>
  )
}

export default DialogsContainer
