import { connect } from "react-redux"
import {
  addPostCreator,
  changePostCreator,
} from "../../../redux/profileReducer"
import MyPosts from "./myPosts"

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
})

const mapDispatchToProps = (dispatch) => ({
  addPost: () => dispatch(addPostCreator()),
  updateNewPostText: (text) => dispatch(changePostCreator(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)
