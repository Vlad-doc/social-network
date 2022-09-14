import { profileAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const CHANGE_USER_PHOTO = "CHANGE_USER_PHOTO"

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
    case CHANGE_USER_PHOTO:
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
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
export const setUserProfilePhoto = (photos) => ({
  type: CHANGE_USER_PHOTO,
  photos,
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
export const setPhoto = (photo) => async (dispatch) => {
  const response = await profileAPI.setUserPhoto(photo)
  if (response.resultCode === 0)
    dispatch(setUserProfilePhoto(response.data.photos))
}
export const setProfileData = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.id
  const response = await profileAPI.saveUserData(profile)
  if (response.data.resultCode === 0) {
    dispatch(getUserData(userId))
  } else {
    dispatch(
      stopSubmit("edit-profile", {
        _error: response.data.messages[0] || "Some ERROR",
      }),
    )
    return Promise.reject(response.data.messages[0])
  }
}

export default profileReducer
