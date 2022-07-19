const NEW_MESSAGE = "NEW-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "World" },
    { id: 3, message: "You are beautiful" },
    { id: 4, message: "YO" },
    { id: 5, message: "Bye" },
  ],
  dialogs: [
    {
      id: 1,
      name: "Valera",
      avatar: "https://findicons.com/files/icons/1072/face_avatars/300/i03.png",
    },
    {
      id: 2,
      name: "Anton",
      avatar: "https://findicons.com/files/icons/1072/face_avatars/300/i03.png",
    },
    {
      id: 3,
      name: "Alex",
      avatar: "https://findicons.com/files/icons/1072/face_avatars/300/i03.png",
    },
    {
      id: 4,
      name: "Mikhail",
      avatar: "https://findicons.com/files/icons/1072/face_avatars/300/i03.png",
    },
  ],
  newMessageText: "",
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: state.messages[state.messages.length - 1].id + 1,
            message: state.newMessageText,
          },
        ],
        newMessageText: "",
      }

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.payload,
      }

    default:
      return state
  }
}

export const sendMessageCreator = () => ({
  type: NEW_MESSAGE,
})
export const newMessageCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  payload: text,
})

export default dialogsReducer
