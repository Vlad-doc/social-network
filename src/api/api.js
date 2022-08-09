import axios from "axios"

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "b918b344-9af7-468d-85fc-eb294e638b71",
  },
})

export const authAPI = {
  me() {
    return instance.get(`auth/me`).then((response) => response.data)
  },
  getUserProfile(id) {
    return profileAPI.getUserProfile(id)
  },
  login(email, password, rememberMe) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => response.data)
  },
  logout() {
    return instance.delete(`/auth/login`)
  },
}

export const usersAPI = {
  loadUsers(pageSize, currentPage) {
    return instance
      .get(`users?count=${pageSize}&page=${currentPage}`)
      .then((response) => response.data)
  },
  setUserFollow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data)
  },
  setUserUnFollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data)
  },
  getUserProfile(id) {
    return profileAPI.getUserProfile(id)
  },
}

export const profileAPI = {
  getUserProfile(id) {
    return instance.get(`profile/${id}`).then((response) => response.data)
  },
  getProfileStatus(id) {
    return instance.get(`profile/status/${id}`)
  },
  updateProfileStatus(status) {
    return instance.put(`/profile/status`, { status })
  },
}
