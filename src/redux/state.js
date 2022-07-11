const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const NEW_MESSAGE = "NEW-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello", likeCount: 5 },
        { id: 2, message: "My first post", likeCount: 20 },
        { id: 3, message: "Yo Yo Yo", likeCount: 55 },
        { id: 4, message: "Bye", likeCount: 1 },
      ],
      newPostText: "Hello friend",
    },
    dialogsPage: {
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
          avatar:
            "https://findicons.com/files/icons/1072/face_avatars/300/i03.png",
        },
        {
          id: 2,
          name: "Anton",
          avatar:
            "https://findicons.com/files/icons/1072/face_avatars/300/i03.png",
        },
        {
          id: 3,
          name: "Alex",
          avatar:
            "https://findicons.com/files/icons/1072/face_avatars/300/i03.png",
        },
        {
          id: 4,
          name: "Mikhail",
          avatar:
            "https://findicons.com/files/icons/1072/face_avatars/300/i03.png",
        },
      ],
      defaultText: "Enter message",
    },
    friendsPage: {
      friends: [
        {
          id: 1,
          name: "Vlad",
          avatar: "https://pngicon.ru/file/uploads/2_16.png",
        },
        {
          id: 2,
          name: "Julia",
          avatar:
            "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images-HD.png",
        },
        {
          id: 3,
          name: "Kris",
          avatar: "https://pngicon.ru/file/uploads/2_16.png",
        },
        {
          id: 4,
          name: "Lena",
          avatar:
            "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images-HD.png",
        },
        {
          id: 5,
          name: "Bill",
          avatar: "https://pngicon.ru/file/uploads/2_16.png",
        },
      ],
    },
  },
  _callSubscriber() {},

  subscribe(observe) {
    this._callSubscriber = observe
  },
  getState() {
    return this._state
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      this._state.profilePage.posts.push({
        id:
          this._state.profilePage.posts[
            this._state.profilePage.posts.length - 1
          ].id + 1,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      })
      this._callSubscriber(this._state)
      this._state.profilePage.newPostText = ""
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    } else if (action.type === NEW_MESSAGE) {
      this._state.dialogsPage.messages.push({
        id:
          this._state.dialogsPage.messages[
            this._state.dialogsPage.messages.length - 1
          ].id + 1,
        message: this._state.dialogsPage.defaultText,
      })
      this._callSubscriber(this._state)
      this._state.dialogsPage.defaultText = ""
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.defaultText = action.newMessage
      this._callSubscriber(this._state)
    }
  },
}

export const addPostActionCreator = () => ({
  type: ADD_POST,
})
export const changePostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})
export const addNewMessageActionCreator = () => ({
  type: NEW_MESSAGE,
})
export const newMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: text,
})

export default store

window.store = store
