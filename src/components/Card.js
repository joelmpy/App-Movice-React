import React from "react";
import { Link } from "react-router-dom";

function Card(movie) {
let img_movie = "https://image.tmdb.org/t/p/w500"

  return (
    <>
      <div className="movie">
        <img src={`${img_movie}${movie.info.poster_path}`} alt="" className="poster" />
        <div className="movie-details">
          <div className="box">
            <h4 className="title-card">{movie.info.title}</h4>
            <p className="raiting">{movie.info.vote_average}</p>
          </div>
        </div>

        <div className="link-overview">
          <Link to={""} className="bn.62">
            En savoir plus
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
