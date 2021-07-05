import React from "react";
import "./PostInput.css";
import { useSelector, useDispatch } from "react-redux";

function PostInput() {
  //global states
  const text = useSelector((state) => state.textValue);
  const isGif = useSelector((state) => state.setIsGif);
  const gif = useSelector((state) => state.setGif);

  const dispatch = useDispatch(); //to leverage reducers

  function addPost() {
    if (text !== "" || gif !== null) {
      dispatch({ type: "ADD_POST", payload: { text, gif } });
      dispatch({ type: "GIF_SELECTED_OR_NOT", payload: false });
      dispatch({ type: "SET_GIF", payload: null });
      dispatch({ type: "UPDATE_TEXT", payload: "" });
    }
  }

  function showGifComp() {
    dispatch({ type: "DISABLE_GIF_COMP" });
  }

  function removeGif() {
    dispatch({ type: "SET_GIF", payload: null });
    dispatch({ type: "GIF_SELECTED_OR_NOT", payload: false });
  }

  return (
    <>
      <section className="input-section">
        <h4 className="heading">Create Post</h4>
        <textarea
          placeholder="What's on your mind?"
          value={text}
          onChange={(e) =>
            dispatch({ type: "UPDATE_TEXT", payload: e.target.value })
          }
        ></textarea>
        <div className="gif-container">
          {isGif ? (
            <div>
              <img className="gif-image" src={gif} alt="gif"></img>
              <button className="gif-del-btn" type="button" onClick={removeGif}>
                X
              </button>
            </div>
          ) : null}
        </div>
        <div className="add-post-section">
          <button className="gif-button" type="button" onClick={showGifComp}>
            GIF
          </button>
          <button className="post-button" type="button" onClick={addPost}>
            Post
          </button>
        </div>
      </section>
    </>
  );
}

export default PostInput;
