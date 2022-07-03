const state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hello", likeCount: 5 },
      { id: 2, message: "My first post", likeCount: 20 },
    ],
  },
  dialogsPage: {
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "World" },
      { id: 3, message: "You are beautiful" },
      { id: 4, message: "YO" },
    ],
    dialogs: [
      { id: 1, name: "Valera" },
      { id: 2, name: "Anton" },
      { id: 3, name: "Alex" },
      { id: 4, name: "Mikhail" },
    ],
  },
}
export default state
