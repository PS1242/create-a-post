import { combineReducers } from "redux";

function textValue(state = "", action) {
  switch (action.type) {
    case "UPDATE_TEXT":
      return action.payload;

    default:
      return state;
  }
}

function posts(state = [], action) {
  switch (action.type) {
    case "ADD_POST":
      return [...state, { text: action.payload.text, gif: action.payload.gif }];

    default:
      return state;
  }
}

function setIsGif(state = false, action) {
  switch (action.type) {
    case "GIF_SELECTED_OR_NOT":
      return action.payload;

    default:
      return state;
  }
}

function setRenderGifComp(state = false, action) {
  switch (action.type) {
    case "DISABLE_GIF_COMP":
      return !state;

    default:
      return state;
  }
}

function setGif(state = false, action) {
  switch (action.type) {
    case "SET_GIF":
      return action.payload;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts,
  setRenderGifComp,
  setGif,
  setIsGif,
  textValue,
});

export default rootReducer;
