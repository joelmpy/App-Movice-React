import React from 'react'

function ResultMain(allmovies) {
    const image_api = "https://image.tmdb.org/t/p/w500"
  return (
    <div>
        <img src={`${image_api}${allmovies.movies.poster_path}`} alt="" className="poster"/>
       <p>{allmovies.movies.original_title}</p>
    </div>
  )
}

export default ResultMain