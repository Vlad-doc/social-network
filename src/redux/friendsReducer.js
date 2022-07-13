const initialState = {
  friends: [
    {
      id: 1,
      name: "Vlad",
      avatar: "https://pngicon.ru/file/uploads/2_16.png",
    },
    {
      id: 2,
      name: "Julia",
      avatar:
        "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images-HD.png",
    },
    {
      id: 3,
      name: "Kris",
      avatar: "https://pngicon.ru/file/uploads/2_16.png",
    },
    {
      id: 4,
      name: "Lena",
      avatar:
        "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Images-HD.png",
    },
    {
      id: 5,
      name: "Bill",
      avatar: "https://pngicon.ru/file/uploads/2_16.png",
    },
  ],
}

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default friendsReducer
