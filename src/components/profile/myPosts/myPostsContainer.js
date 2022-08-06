import { connect } from "react-redux"
import { addPostText } from "../../../redux/profileReducer"
import MyPosts from "./myPosts"

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
})

export default connect(mapStateToProps, { addPostText })(MyPosts)
