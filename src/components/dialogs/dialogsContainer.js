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
  isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {
  sendMessageCreator,
  newMessageCreator,
})(Dialogs)
