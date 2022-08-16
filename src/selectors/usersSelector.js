import { createSelector } from "@reduxjs/toolkit"

const getUsersSelector = (state) => state.usersPage.users
export const getUsers = createSelector(getUsersSelector, (users) => users)
export const getPageSize = (state) => state.usersPage.pageSize
export const getTotalUsersCount = (state) => state.usersPage.totalUsersCount
export const getCurrentPage = (state) => state.usersPage.currentPage
export const getIsFetching = (state) => state.usersPage.isFetching
export const getFollowProgress = (state) => state.usersPage.followProgress
