import React from "react";
import { useSelector } from "react-redux";
import "./Posts.css";

function Posts() {
  const posts = useSelector((state) => state.posts);
  return (
    <>
      {posts.map((item, index) => {
        return (
          <div key={index} className="post">
            <p className="post-text">{item.text}</p>
            {item.gif && (
              <img className="gif-image" src={item.gif} alt="gif"></img>
            )}
          </div>
        );
      })}
    </>
  );
}

export default Posts;
