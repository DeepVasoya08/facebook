import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React from "react";
import "./Post.css";
import { ExpandMoreOutlined } from "@material-ui/icons";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />

        <div className="post__topInfo">
          <h3>{username}</h3>
          {/* <p>{new Date(timestamp?.toDate()).toLocaleString()}</p> */}
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
        </div>
        <div className="post__option">
          <NearMeOutlinedIcon />
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
}

export default Post;