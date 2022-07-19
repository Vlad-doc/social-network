import React, { createRef } from "react"
import postsStyle from "./myPosts.module.css"
import Post from "./post/post"

function MyPosts({ posts, newPostText, updateNewPostText, addPost }) {
  const createPost = () => addPost()

  const onPostChange = () => updateNewPostText(newPostElement.current.value)

  const newPostElement = createRef()
  return (
    <div className={postsStyle.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={newPostText}
            onChange={onPostChange}
            placeholder="Hello friend"
          />
        </div>
        <div>
          <button onClick={createPost}>Add post</button>
        </div>
      </div>
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

export default MyPosts
