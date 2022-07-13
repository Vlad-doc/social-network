const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const initialState = {
  posts: [
    { id: 1, message: "Hello", likeCount: 5 },
    { id: 2, message: "My first post", likeCount: 20 },
    { id: 3, message: "Yo Yo Yo", likeCount: 55 },
    { id: 4, message: "Bye", likeCount: 1 },
  ],
  newPostText: "Hello friend",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: state.posts[state.posts.length - 1].id + 1,
        message: state.newPostText,
        likeCount: 0,
      })
      state.newPostText = ""
      return state

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state

    default:
      return state
  }
}

export const addPostCreator = () => ({
  type: ADD_POST,
})
export const changePostCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export default profileReducer
