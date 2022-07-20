import Dialogs from "./dialogs"
import { connect } from "react-redux/es/exports"
import {
  newMessageCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer"

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText,
})

const mapDispatchToProps = (dispatch) => ({
  sendMessageCreator: () => dispatch(sendMessageCreator()),
  updateMessageBody: (text) => dispatch(newMessageCreator(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)
