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
    if (action.type === "ADD-POST") {
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
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText
      this._callSubscriber(this._state)
    }
  },
}

export default store

window.store = store
