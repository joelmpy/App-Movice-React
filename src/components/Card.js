import React from "react";
import { Link } from "react-router-dom";

function Card(movie) {
let img_movie = "https://image.tmdb.org/t/p/w500"

const setVoteClass = (vote) => {
  if(vote >= 8){
    return "green"
  }else if (vote >= 6){
      return "orange"
  }else {
        return "red"
  }
}


  return (
    <>
      <Link to={`/Movie/${movie.info.id}`} className="bn.62">
      <div className="main-card">
        <img
          src={`${img_movie}${movie.info.poster_path}`}
          alt={movie.info.original_title}
          className="poster"
        />
        <div className="movie-info">
          <h3>{movie.info.original_title}</h3>
          <span className=
          {`tag ${setVoteClass(movie.info.vote_average)} `}>
            {movie.info.vote_average}
            </span>
        </div>

        <div className="movie-over">
          <h2>Overview</h2>
          <p>{movie.info.overview}</p>
        </div>
      </div>
      </Link>
    </>
  );
}

export default Card;
