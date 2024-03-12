import React, { useState } from "react";
import Post from "./Post/Post";
import Suggestions from "./Suggestions";
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "sarveshyadav",
      postImage:
        "https://drive.google.com/file/d/12LoknvlJwuQ_UjHRatIuWTOcoSfO82ts/view?usp=sharing",
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "swayamverma",
      postImage:
        "https://drive.google.com/drive/folders/11iMRqeeg56p4cbTfv-XbIXSkvUowt-8s?usp=sharing",
      likes: 432,
      timestamp: "2d",
    },
    {
      user: "justinfernandes",
      postImage:
      "https://drive.google.com/file/d/12W5krvRMOnf5WrYOiz9m9lQsFvcX5I2V/view?usp=sharing",
      likes: 140,
      timestamp: "2d",
    },
    {
      user: "dnyandeepgaonkar",
      postImage:
        "https://drive.google.com/file/d/12KU2nmssWGBB4Y0t5-0hfdgKP8e8guqi/view?usp=sharing",
      likes: 14,
      timestamp: "2d",
    },
  ]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
