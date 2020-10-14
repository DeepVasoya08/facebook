import React from "react";
import Story from "./Story";
import "./StoryReel.css";
import { useStateValue } from "./StateProvider";

function StoryReel() {
  const [{ user }] = useStateValue();
  return (
    <>
      <div className="storyReel">
        <Story
          image="https://picsum.photos/200"
          profileSrc={user.photoURL}
          title={user.displayName}
        />
        <Story
          image="https://picsum.photos/200"
          profileSrc="https://picsum.photos/200"
          title="Test"
        />
        <Story
          image="https://picsum.photos/200"
          profileSrc="https://picsum.photos/200"
          title="User"
        />
        <Story
          image="https://picsum.photos/200"
          profileSrc="https://picsum.photos/200"
          title="India"
        />
        <Story
          image="https://picsum.photos/200"
          profileSrc="https://picsum.photos/200"
          title="Asia"
        />
      </div>
    </>
  );
}

export default StoryReel;
