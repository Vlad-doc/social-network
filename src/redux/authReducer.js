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
        isAuth: true,
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

export const setAuthReducer = (id, email, login) => ({
  type: SET_USER_AUTH,
  payload: { id, email, login },
})

export const getAuthUser = (data) => ({
  type: GET_AUTH_USER,
  payload: data,
})

export const getAuthorizedUserDetails = () => (dispatch) => {
  authAPI.me().then((response) => {
    if (response.resultCode === 0) {
      const { email, id, login } = response.data
      dispatch(setAuthReducer(email, id, login))
    }
    authAPI.getUserProfile(response.data.id).then((response) => {
      dispatch(getAuthUser(response))
    })
  })
}

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.resultCode === 0) {
      dispatch(() => (dispatch) => {
        authAPI.me().then((response) => {
          if (response.resultCode === 0) {
            const { email, id, login } = response.data
            dispatch(setAuthReducer(email, id, login))
          }
        })
      })
    }
  })
}

export default authReducer
