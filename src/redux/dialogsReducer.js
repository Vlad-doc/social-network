const NEW_MESSAGE = "NEW-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      state.messages.push({
        id: state.messages[state.messages.length - 1].id + 1,
        message: state.newMessageText,
      })
      state.newMessageText = ""
      return state

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage
      return state

    default:
      return state
  }
}

export const sendMessageCreator = () => ({
  type: NEW_MESSAGE,
})
export const newMessageCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
})

export default dialogsReducer
