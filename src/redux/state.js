import { rerenderEntireTree } from "../render"

const state = {
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
        name: "Kseniya",
        avatar:
          "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images-HD.png",
      },
      {
        id: 3,
        name: "Artem",
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
}

export const addPost = () => {
  state.profilePage.posts.push({
    id: state.profilePage.posts[state.profilePage.posts.length - 1].id + 1,
    message: state.profilePage.newPostText,
    likeCount: 0,
  })
  rerenderEntireTree(state)
  updateNewPostText("")
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}
export default state
