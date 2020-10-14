import { Avatar } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import React, { useState } from "react";
import "./PostMessages.css";
import { useStateValue } from "./StateProvider";
import db from "./Firebase";
import firebase from "firebase";

function PostMessages() {
  const [{ user }] = useStateValue();
  const [input, newInput] = useState("");
  const [imgurl, newImgurl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imgurl,
    });

    newInput("");
    newImgurl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            onChange={(e) => newInput(e.target.value)}
            value={input}
            className="messageSender__input"
            placeholder={`What's on your mind ${user.displayName}?`}
          />
          <input
            value={imgurl}
            onChange={(e) => newImgurl(e.target.value)}
            placeholder="Image URL {Optional}"
          />
          <button disabled={!input} onClick={handleSubmit} type="submit">
            Send
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default PostMessages;
