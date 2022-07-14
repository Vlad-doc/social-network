import React from "react"
import {
  addPostCreator,
  changePostCreator,
} from "../../../redux/profileReducer"
import StoreContext from "../../../storeContext"
import MyPosts from "./myPosts"

// function MyPostsContainer({ store }) {
//   const createPost = () => store.dispatch(addPostCreator())

//   const onPostChange = (text) => store.dispatch(changePostCreator(text))

//   return (
//     <MyPosts
//       updateNewPostText={onPostChange}
//       addPost={createPost}
//       posts={store.getState().profilePage.posts}
//       newPostText={store.getState().profilePage.newPostText}
//     />
//   )
// }
function MyPostsContainer() {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const createPost = () => store.dispatch(addPostCreator())
        const onPostChange = (text) => store.dispatch(changePostCreator(text))
        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={createPost}
            posts={store.getState().profilePage.posts}
            newPostText={store.getState().profilePage.newPostText}
          />
        )
      }}
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer
