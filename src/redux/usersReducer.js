const FOLLOW = "FOLLOW"
const UN_FOLLOW = "UN_FOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const SET_LOADING = "SET_LOADING"

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
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
    case SET_LOADING:
      return {
        ...state,
        isFetching: action.payload,
      }
    default:
      return state
  }
}

export const follow = (userId) => ({
  type: FOLLOW,
  payload: userId,
})
export const unFollow = (userId) => ({
  type: UN_FOLLOW,
  payload: userId,
})
export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
})
export const setCurrentPage = (index) => ({
  type: SET_CURRENT_PAGE,
  payload: index,
})
export const setTotalUsersCount = (count) => ({
  type: SET_TOTAL_USER_COUNT,
  payload: count,
})
export const setIsLoading = (bool) => ({
  type: SET_LOADING,
  payload: bool,
})

export default usersReducer
