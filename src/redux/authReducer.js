import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_AUTH = "SET_USER_AUTH"
const GET_AUTH_USER = "GET_AUTH_USER"

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  authUser: null,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_AUTH:
      return {
        ...state,
        ...payload,
        isAuth: !state.isAuth,
      }
    case GET_AUTH_USER:
      return {
        ...state,
        authUser: payload,
      }
    default:
      return state
  }
}

export const setAuthReducer = (email, id, login) => ({
  type: SET_USER_AUTH,
  payload: { email, id, login },
})

export const getAuthUser = (data) => ({
  type: GET_AUTH_USER,
  payload: data,
})

export const getAuthorizedUserDetails = () => async (dispatch) => {
  const response = await authAPI.me()
  if (response.resultCode === 0) {
    const { email, id, login } = response.data
    dispatch(setAuthReducer(email, id, login))
  } else if (response.resultCode === 1) {
    return null
  }
  const responseUserProfile = await authAPI.getUserProfile(response.data.id)
  dispatch(getAuthUser(responseUserProfile))
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe)
  if (response.resultCode === 0) {
    dispatch(getAuthorizedUserDetails())
  } else {
    dispatch(
      stopSubmit("login", {
        _error: response.messages[0] || "Some ERROR",
      }),
    )
  }
}

export const logout = () => async (dispatch) => {
  const response = await authAPI.logout()
  if (response.data.resultCode === 0) {
    dispatch(setAuthReducer(null, null, null))
  }
}

export default authReducer
