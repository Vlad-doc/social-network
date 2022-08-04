import Dialogs from "./dialogs"
import { connect } from "react-redux/es/exports"
import {
  newMessageCreator,
  sendMessageCreator,
} from "../../redux/dialogsReducer"
import WithAuthRedirect from "../hoc/withAuthRedirect"

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
  newMessageText: state.dialogsPage.newMessageText,
})

export default WithAuthRedirect(
  connect(mapStateToProps, {
    sendMessageCreator,
    newMessageCreator,
  })(Dialogs),
)
