import React from "react"
import postsStyle from "./myPosts.module.css"
import Post from "./post/post"

function MyPosts({ posts }) {
  return (
    <div className={postsStyle.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="20" rows="2"></textarea>
        </div>
        <div>
          <button>Add post</button>
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
        {/* <Post message="Hello" likesCount="20" />
        <Post message="My first post" likesCount="15" /> */}
      </div>
    </div>
  )
}

export default MyPosts
