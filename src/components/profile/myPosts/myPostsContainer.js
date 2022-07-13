import React from "react"
import {
  addPostCreator,
  changePostCreator,
} from "../../../redux/profileReducer"
import MyPosts from "./myPosts"

function MyPostsContainer({ store }) {
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
}

export default MyPostsContainer
