import MyPosts from "./myPosts"

const MyPostsContainer = ({ posts, addPostText, userAuth, params }) => {
  return (
    <MyPosts
      posts={posts}
      addPostText={addPostText}
      userAuth={userAuth}
      params={params}
    />
  )
}

export default MyPostsContainer
