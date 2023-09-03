import React, { useEffect, useState } from "react";
import { MoreVert } from "@mui/icons-material";
import "./post.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
// import User from "../../../../api/models/User";

const Post = ({ post }) => {
  const [user, SetUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user?userId=${post.userId}`);
      console.log(res);
      SetUsers(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
              
                src={user.profilePicture ? PF+'person/'+user.profilePicture : PF+`person/noAvatar.png`}
                // `${PF + "person/" + user.profilePicture}` ||
                // PF+`/person/1.jpeg`
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post?.createdAt)}</span>{" "}
            {/** using ? if available then it will use otherwise it will not use */}
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={`${PF}post/${post.img}`} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={handleLike}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={handleLike}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
