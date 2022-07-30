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
        isAuth: true,
      }
    default:
      return state
  }
}

export const setAuthReducer = (id, email, login) => ({
  type: SET_USER_AUTH,
  payload: { id, email, login },
})

export default authReducer
