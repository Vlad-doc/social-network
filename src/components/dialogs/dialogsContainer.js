import Dialogs from "./dialogs"
import { connect } from "react-redux/es/exports"
import { sendMessageCreator } from "../../redux/dialogsReducer"
import WithAuthRedirect from "../hoc/withAuthRedirect"

const mapStateToProps = (state) => ({
  dialogs: state.dialogsPage.dialogs,
  messages: state.dialogsPage.messages,
})

export default WithAuthRedirect(
  connect(mapStateToProps, {
    sendMessageCreator,
  })(Dialogs),
)
