import React from "react"
import Dialogs from "./dialogs"
import { connect } from "react-redux/es/exports"
import {
  newMessageCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer"

function DialogsContainer(props) {
  return (
    <Dialogs
      sendMessageCreator={props.sendMessage}
      updateMessageBody={props.onMessageChange}
      dialogs={props.dialogs}
      messages={props.messages}
      newMessageText={props.newMessageText}
    />
  )
}

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText,
})

const mapDispatchToProps = (dispatch) => ({
  sendMessage: () => dispatch(sendMessageCreator()),
  onMessageChange: (text) => dispatch(newMessageCreator(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer)
