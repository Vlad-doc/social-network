import React from "react"
import { Field, reduxForm } from "redux-form"
import postsStyle from "./myPosts.module.css"
import Post from "./post/post"

function MyPosts({ posts, addPostText }) {
  const createNewPost = (values) => {
    addPostText(values.newPostText)
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
        component="textarea"
        name="newPostText"
        placeholder="New post text"
      />
      <button>Add post</button>
    </form>
  )
}

const PostsReduxForm = reduxForm({ form: "posts" })(PostsForm)

export default MyPosts
