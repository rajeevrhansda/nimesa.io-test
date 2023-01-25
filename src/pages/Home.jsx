import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import "./Home.css";
import axios from "axios";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="home">
      {posts.map((item) => (
        //  <div key={item.id}>p</div>
        <Post key={item.id} post={item} users={users} />
      ))}
    </div>
  );
};

export default Home;
