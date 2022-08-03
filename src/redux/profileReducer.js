import { getUserProfile } from "../api/api"

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

const initialState = {
  posts: [
    { id: 1, message: "Hello", likeCount: 5 },
    { id: 2, message: "My first post", likeCount: 20 },
    { id: 3, message: "Yo Yo Yo", likeCount: 55 },
    { id: 4, message: "Bye", likeCount: 1 },
  ],
  newPostText: "",
  profile: null,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts[state.posts.length - 1].id + 1,
            message: state.newPostText,
            likeCount: 0,
          },
        ],
        newPostText: "",
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.payload,
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    default:
      return state
  }
}

export const addPostCreator = () => ({
  type: ADD_POST,
})
export const changePostCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  payload: text,
})
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})

export const getUserData = (id) => (dispatch) => {
  getUserProfile(id).then((response) => {
    dispatch(setUserProfile(response))
  })
}

export default profileReducer
