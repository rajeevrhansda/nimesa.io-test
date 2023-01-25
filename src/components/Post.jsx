import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = ({ post, users }) => {
  let user = [];
  function filter() {
    let x = post.userId;
    user = users.filter((item) => item.id === x);
  }
  filter();
  return (
    <div className="post">
      <Link to={`/post/${post.userId}`}>
        <p>Name: {user[0]?.name}</p>
        <p>User Name: {user[0]?.username}</p>
      </Link>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default Post;
