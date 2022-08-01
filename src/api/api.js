import axios from "axios"

const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "b918b344-9af7-468d-85fc-eb294e638b71",
  },
})

export const getUsers = (pageSize, currentPage) => {
  return instance
    .get(`users?count=${pageSize}&page=${currentPage}`)
    .then((response) => response.data)
}

export const getAuth = () => {
  return instance.get(`auth/me`).then((response) => response.data)
}

export const getUserProfile = (id) => {
  return instance.get(`profile/${id}`).then((response) => response.data)
}

export const setUserFollow = (id) => {
  return instance.post(`follow/${id}`).then((response) => response.data)
}

export const setUserUnFollow = (id) => {
  return instance.delete(`follow/${id}`).then((response) => response.data)
}
