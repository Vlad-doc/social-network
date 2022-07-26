const FOLLOW = "FOLLOW"
const UN_FOLLOW = "UN_FOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
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
        users: action.payload,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload,
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
export const setCurrentPageAC = (index) => ({
  type: SET_CURRENT_PAGE,
  payload: index,
})
export const setTotalUsersCountAC = (count) => ({
  type: SET_TOTAL_USER_COUNT,
  payload: count,
})

export default usersReducer
