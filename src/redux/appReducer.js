import { getAuthorizedUserDetails } from "./authReducer"

const SET_INITIALIZED = "SET_INITIALIZED"

const initialState = {
  initialized: false,
}

const appReducer = (state = initialState, { type }) => {
  switch (type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state
  }
}

export const initializedSuccess = () => ({ type: SET_INITIALIZED })

export const initializeAPP = () => (dispatch) => {
  dispatch(getAuthorizedUserDetails()).then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer
