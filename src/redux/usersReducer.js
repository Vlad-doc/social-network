import { usersAPI } from "../api/api"

const FOLLOW = "FOLLOW"
const UN_FOLLOW = "UN_FOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const SET_LOADING = "SET_LOADING"
const SET_FOLLOW_PROGRESS = "SET_FOLLOW_PROGRESS"

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followProgress: [],
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
    case SET_FOLLOW_PROGRESS:
      return {
        ...state,
        followProgress: action.isFetching
          ? [...state.followProgress, action.payload]
          : state.followProgress.filter((id) => id !== action.payload),
      }
    default:
      return state
  }
}

export const subscribeToUser = (userId) => ({
  type: FOLLOW,
  payload: userId,
})
export const unSubscribeToUser = (userId) => ({
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
export const loadingInProgress = (bool) => ({
  type: SET_LOADING,
  payload: bool,
})
export const setFollowProgress = (isFetching, id) => ({
  type: SET_FOLLOW_PROGRESS,
  payload: id,
  isFetching,
})

export const requestUsers = (pageSize, page) => (dispatch) => {
  dispatch(loadingInProgress(true))
  usersAPI.loadUsers(pageSize, page).then((response) => {
    dispatch(loadingInProgress(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(Math.ceil(response.totalCount / 200)))
  })
}

export const follow = (id) => (dispatch) => {
  dispatch(setFollowProgress(true, id))
  usersAPI.setUserFollow(id).then((response) => {
    if (response.resultCode === 0) {
      dispatch(subscribeToUser(id))
    }
    dispatch(setFollowProgress(false, id))
  })
}

export const unFollow = (id) => (dispatch) => {
  dispatch(setFollowProgress(true, id))
  usersAPI.setUserUnFollow(id).then((response) => {
    if (response.resultCode === 0) {
      dispatch(unSubscribeToUser(id))
    }
    dispatch(setFollowProgress(false, id))
  })
}

export default usersReducer
