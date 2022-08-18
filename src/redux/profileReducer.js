import { profileAPI } from "../api/api"

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

const initialState = {
  posts: [
    { id: 1, message: "Hello", likeCount: 5 },
    { id: 2, message: "My first post", likeCount: 20 },
    { id: 3, message: "Yo Yo Yo", likeCount: 55 },
    { id: 4, message: "Bye", likeCount: 1 },
  ],
  profile: null,
  status: "",
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
            message: action.newPostText,
            likeCount: 0,
          },
        ],
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      }
    default:
      return state
  }
}

export const addPostText = (newPostText) => ({
  type: ADD_POST,
  newPostText,
})
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
})
export const getUserData = (id) => async (dispatch) => {
  const response = await profileAPI.getUserProfile(id)
  dispatch(setUserProfile(response))
}
export const getUserStatus = (id) => async (dispatch) => {
  const response = await profileAPI.getProfileStatus(id)
  dispatch(setStatus(response.data))
}
export const updateUserStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateProfileStatus(status)
  if (response.data.resultCode === 0) dispatch(setStatus(status))
}
export default profileReducer
