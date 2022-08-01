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
