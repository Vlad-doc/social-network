import React from "react"
import { connect } from "react-redux"
import {
  addPostCreator,
  changePostCreator,
} from "../../../redux/profileReducer"
import MyPosts from "./myPosts"

function MyPostsContainer(props) {
  return (
    <MyPosts
      updateNewPostText={props.onPostChange}
      addPost={props.createPost}
      posts={props.posts}
      newPostText={props.newPostText}
    />
  )
}

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
})

const mapDispatchToProps = (dispatch) => ({
  createPost: () => dispatch(addPostCreator()),
  onPostChange: (text) => dispatch(changePostCreator(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer)
