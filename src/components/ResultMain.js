import React from "react";
import { Link } from "react-router-dom";
import errorPage from "../images/error.jpg"

function ResultMain(allmovies) {
  const image_api = "https://image.tmdb.org/t/p/w500";

  const setVoteClass = (vote) => {
    if(vote >= 8){
      return "green"
    } else if (vote >= 6 ){
      return "orange"
    } else {
      return "red"
    }
  }

  return (
    <>
     <Link to={`/Movie/${allmovies.movies.id}`} className="bn.62">
      <div className="main-card">
        <img
          src= {allmovies.movies.poster_path ? (image_api + allmovies.movies.poster_path) : (errorPage)}
          alt={allmovies.movies.original_title}
          className="poster"
        />
        <div className="movie-info">
          <h3>{allmovies.movies.original_title}</h3>
          <span className=
          {`tag ${setVoteClass(allmovies.movies.vote_average)} `}>
            {allmovies.movies.vote_average}
            </span>
        </div>

        <div className="movie-over">
          <h2>Overview</h2>
          <p>{allmovies.movies.overview}</p>
        </div>
      </div>
      </Link>
    </>
  );
}

export default ResultMain;
