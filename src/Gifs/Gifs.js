import React, { useState, useEffect } from "react";
import Gif from "../Gif/Gif.js";
import "./Gifs.css";
import Loading from "../Loading/Loading.js";
import NothingFound from "../NothingFound/NothingFound.js";
import { useDispatch } from "react-redux";

function Gifs() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gifSearch, setGifSearch] = useState("");
  const [nothingFound, setNothingFound] = useState(false);
  const dispatch = useDispatch();

  //api for preloading gifs
  const GIPHY_API =
    "https://api.giphy.com/v1/gifs/trending?api_key=qsIfvYdUc5RywSGvpYtuJGt60SOq5Mbd&limit=20";

  //api for particular search
  const GIPHY_SEARCH_API =
    "https://api.giphy.com/v1/gifs/search?api_key=qsIfvYdUc5RywSGvpYtuJGt60SOq5Mbd";

  //preloading gifs
  async function loadGifs() {
    const data = await fetch(GIPHY_API);
    const resp = await data.json();
    setLoading(false);
    console.log(resp);
    setGifs(resp.data.map((item) => item.images.fixed_height.url));
  }

  //performing search
  async function searchGif() {
    setLoading(true);
    let api = "";
    gifSearch
      ? (api = `${GIPHY_SEARCH_API}&limit=20&offset=0&q=${gifSearch}`)
      : (api = GIPHY_API);
    const data = await fetch(api);
    const resp = await data.json();
    setLoading(false);

    //if returned data is empty, show nothing found component
    if (!resp.data.length) setNothingFound(true);
    else {
      setNothingFound(false);
      setGifs(resp.data.map((item) => item.images.fixed_height.url));
    }
  }

  //load gifs on first render
  useEffect(() => {
    loadGifs();
  }, []);

  //go back to create post page
  function goBack() {
    dispatch({ type: "DISABLE_GIF_COMP" });
  }

  return (
    <>
      <div className="search-component">
        <button className="back-button" type="button" onClick={goBack}>
          Back
        </button>
        <input
          className="gif-search-input"
          type="text"
          placeholder="Search gifs..."
          value={gifSearch}
          onChange={(e) => setGifSearch(e.target.value)}
        ></input>
        <button className="search-button" type="button" onClick={searchGif}>
          Search
        </button>
      </div>
      {loading ? (
        <Loading />
      ) : nothingFound ? (
        <NothingFound />
      ) : (
        <section className="gif-section">
          <Gif data={gifs} />
        </section>
      )}
    </>
  );
}

export default Gifs;
