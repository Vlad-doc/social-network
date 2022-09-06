import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_AUTH = "SET_USER_AUTH"

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_AUTH:
      return {
        ...state,
        ...payload,
      }
    default:
      return state
  }
}

const setAuthReducer = (email, id, login, isAuth) => ({
  type: SET_USER_AUTH,
  payload: { email, id, login, isAuth },
})

export const getAuthorizedUserDetails = () => async (dispatch) => {
  const response = await authAPI.me()
  if (response.resultCode === 0) {
    const { email, id, login } = response.data
    dispatch(setAuthReducer(email, id, login, true))
  } else if (response.resultCode === 1) {
    return null
  }
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
    dispatch(setAuthReducer(null, null, null, false))
  }
}

export default authReducer
