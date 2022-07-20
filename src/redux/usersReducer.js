const FOLLOW = "FOLLOW"
const UN_FOLLOW = "UN_FOLLOW"

const initialState = {
  users: [
    {
      id: 1,
      fullName: "Vlad",
      photo:
        "https://www.clipartmax.com/png/small/96-968075_youre-now-in-slide-show-mode-avatar-de-los-simpsons.png",
      followed: false,
      status: "I am a boss",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 2,
      fullName: "Teo",
      photo:
        "https://www.clipartmax.com/png/small/96-968075_youre-now-in-slide-show-mode-avatar-de-los-simpsons.png",
      followed: true,
      status: "I am a cool",
      location: { city: "Madrid", country: "Spain" },
    },
  ],
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

export default usersReducer
