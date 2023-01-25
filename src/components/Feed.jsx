import React from 'react'
import { Link } from 'react-router-dom'
const Feed = ({post}) => {
  return (
    <div>
        <div key={post.id} className="post">
          <p>ID: {post.id}</p>
          <Link to={`/post/${post.userId}`} >
            <p>UserID: {post.userId}</p>
          </Link>
          <p>TITLE: {post.title}</p>
          <p>BODY: {post.body}</p>
        </div>
    </div>
  )
}

export default Feed