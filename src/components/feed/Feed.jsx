import React, { useEffect, useState } from "react";
import Share from "../share/Share";
import "./feed.css";
import Post from "../post/Post";
import axios from "axios";
// import { Posts } from '../../dummyData'

const Feed = ({ username }) => {
  const [post, SetPost] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      const res = username
        ? await axios.get("/post/profile/"+username)
        : await axios.get("post/timeline/64f0cd1db5a3484e4b80d53c");
      // console.log(res.data);
      SetPost(res.data);
    };
    getPost();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {post.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
