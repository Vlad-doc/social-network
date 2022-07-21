const FOLLOW = "FOLLOW"
const UN_FOLLOW = "UN_FOLLOW"
const SET_USERS = "SET_USERS"

const initialState = {
  users: [],
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload ? { ...user, followed: true } : user,
        ),
      }
    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload ? { ...user, followed: false } : user,
        ),
      }
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.payload],
      }
    default:
      return state
  }
}

export const followAC = (userId) => ({
  type: FOLLOW,
  payload: userId,
})
export const unFollowAC = (userId) => ({
  type: UN_FOLLOW,
  payload: userId,
})
export const setUsersAC = (users) => ({
  type: SET_USERS,
  payload: users,
})

export default usersReducer
