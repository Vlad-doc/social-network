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

export default authReducer
