import React from "react"
import postsStyle from "./myPosts.module.css"
import Post from "./post/post"

function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="20" rows="2"></textarea>
        <button>Add post</button>
      </div>
      <div className={postsStyle.posts}>
        <Post message="Hello" likesCount="20" />
        <Post message="My first post" likesCount="15" />
      </div>
    </div>
  )
}

export default MyPosts
