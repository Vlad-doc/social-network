import React, { createRef } from "react"
import {
  addPostCreator,
  changePostCreator,
} from "../../../redux/profileReducer"
import postsStyle from "./myPosts.module.css"
import Post from "./post/post"

function MyPosts({ state, dispatch }) {
  const createPost = () => dispatch(addPostCreator())

  const onPostChange = () =>
    dispatch(changePostCreator(newPostElement.current.value))

  const newPostElement = createRef()
  return (
    <div className={postsStyle.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={state.newPostText}
            onChange={onPostChange}
          />
        </div>
        <div>
          <button onClick={createPost}>Add post</button>
        </div>
      </div>
      <div className={postsStyle.posts}>
        {state.posts.map((post) => (
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

export default MyPosts
