import React from "react"
import { useSelector } from "react-redux"
import { Field, reduxForm } from "redux-form"
import { maxLength, required } from "../../../utils/validators/validators"
import { TextArea } from "../../common/formsControls/formsControls"
import postsStyle from "./myPosts.module.css"
import Post from "./post/post"

const maxLength15 = maxLength(15)

const MyPosts = ({ posts, addPostText, ...props }) => {
  const auth = useSelector((state) => state.auth.isAuth)
  const createNewPost = (values) => {
    if (auth) {
      addPostText(values.newPostText)
    }
    values.newPostText = ""
  }
  return (
    <div className={postsStyle.postsBlock}>
      <h3>My posts</h3>

      <PostsReduxForm onSubmit={createNewPost} />

      <div className={postsStyle.posts}>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            message={post.message}
            likesCount={post.likeCount}
          />
        ))}
      </div>
    </div>
  )
}
const PostsForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={TextArea}
        name="newPostText"
        placeholder="New post text"
        validate={[required, maxLength15]}
      />
      <button>Add post</button>
    </form>
  )
}

const PostsReduxForm = reduxForm({ form: "posts" })(PostsForm)

export default MyPosts
