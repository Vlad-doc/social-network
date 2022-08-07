import React from "react"
import dialogsStyle from "./dialogs.module.css"
import { DialogItem } from "./dialogItem/dialogItem"
import { Message } from "./message/message"
import { Field, reduxForm } from "redux-form"
import { TextArea } from "../common/formsControls/formsControls"
import { maxLength, required } from "../../utils/validators/validators"

function Dialogs({ sendMessageCreator, dialogs, messages }) {
  const addNewMessage = (values) => {
    console.log(values)
    sendMessageCreator(values.newMessageBody)
  }

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
          <DialogsReduxForm onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  )
}

const maxLength50 = maxLength(50)

const AddMessageForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={TextArea}
        placeholder="Enter your message"
        name="newMessageBody"
        validate={[required, maxLength50]}
      />
      <button>Send</button>
    </form>
  )
}
const DialogsReduxForm = reduxForm({ form: "addMessageForm" })(AddMessageForm)

export default Dialogs
