import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Single.css";
const Single = () => {
  let url = window.location.href;
  let user = url.split("/")[4];

  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
let currentUser;
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${user}/posts`)
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, [user]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  function filter() {
    currentUser = users.filter((item) => item.id == user)[0]?.name;
  }
  filter();
  console.log("ad", currentUser);
  return (
    <div className="single">
      {posts.map((post) => (
        <div key={post.id} className="single-post">
          <p>Name: {currentUser&& currentUser}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Single;
