import React from "react";
import { useDispatch } from "react-redux";

function Gif({ data }) {
  const dispatch = useDispatch();
  function gifSelected(url) {
    dispatch({ type: "SET_GIF", payload: url });
    dispatch({ type: "GIF_SELECTED_OR_NOT", payload: true });
    dispatch({ type: "DISABLE_GIF_COMP" });
  }

  return (
    <>
      {data.map((item, index) => {
        return (
          <img
            key={index}
            src={item}
            alt="gif"
            onClick={() => gifSelected(item)}
          ></img>
        );
      })}
    </>
  );
}

export default Gif;
