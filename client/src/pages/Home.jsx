import React from "react";
import { useSelector } from "react-redux";
import Post from "../components/home/Post";
import Spinner from "../components/Spinner";

const Home = () => {
  const { postRed } = useSelector((state) => state);

  return (
    <div className="home w-100">
      {postRed.get_load ? <Spinner /> : <Post posts={postRed.posts} />}
    </div>
  );
};

export default Home;
