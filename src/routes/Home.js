import React from "react";
import Card from "../components/Card";
import { useState, useEffect } from "react";

function Home() {
  const [movieData, setMovieData] = useState([]);

  let api_key = "&api_key=d3ca35757329b1e58d8f3e823b92f650";
  let base_url = "https://api.themoviedb.org/3/";
  let url = base_url + "/discover/movie?sort_by=popularity.desc" + api_key;

  useEffect(() => {
    allMovie();
  }, []);

  const allMovie = () => {
    fetch(url)
      .then((reponse) => reponse.json())
      .then((response) => setMovieData(response.results));
  };

  return (
    <div className="container">
      {movieData.length === 0 ? (
        <p className="error">Not false</p>
      ) : (
        movieData.map((res, pos) => {
          return <Card info={res} key={pos} />;
        })
      )}
    </div>
  );
}

export default Home;
