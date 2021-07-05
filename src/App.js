import "./App.css";
import PostInput from "./PostInput/PostInput";
import Posts from "./Posts/Posts";
import Gifs from "./Gifs/Gifs";
import { useSelector } from "react-redux";

function App() {
  const renderGifComp = useSelector((state) => state.setRenderGifComp);

  return (
    <>
      {!renderGifComp ? (
        <section className="parent-container">
          <PostInput />
          <Posts />
        </section>
      ) : (
        <Gifs />
      )}
    </>
  );
}

export default App;
