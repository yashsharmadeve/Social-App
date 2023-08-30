import React from "react";
import './online.css'

const Online = ({user}) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <div className="rightbarUsername">{user.username}</div>
    </li>
  );
};

export default Online;
