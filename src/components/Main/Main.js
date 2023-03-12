import React from "react";
import "./Main.css";
import { useState, useEffect } from "react";
import ResultMain from "../ResultMain";

function Main() {
  const [movieApi, setMovieApi] = useState([]);
  const [search, setSearch] = useState("");
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=d3ca35757329b1e58d8f3e823b92f650&query=";


  useEffect(() => {
    if(search === ""){
      getAllMovieData()
    } else {
      getMovie()
    }
  }, [search]);

const getMovie = () => {
  fetch(SEARCHAPI + search)
  .then(reponse => reponse.json())
  .then(res => setMovieApi(res.results))
  .catch((error) => {
    console.log(error);
  })
}

const getAllMovieData = () => {
  fetch('https://api.themoviedb.org/3//discover/movie?sort_by=popularity.desc&api_key=d3ca35757329b1e58d8f3e823b92f650')
  .then(reponse => reponse.json())
  .then(res => setMovieApi(res.results))
  .catch((error) => {
    console.log(error)
  })
}


  const handleChange = (event) => {
    setSearch(event.target.value);
  };


  return (
    <>
      <section id="search-bar">
        <div className="container-search">
            <div className="content-search-bar">
              <input type="text" placeholder="Rechercher un film..." onChange={handleChange} value={search} />
            </div>
        </div>
        <div className="result-container">
          {
               movieApi.length === 0
               ?
               <div className="new-error">
                <p>sorry no movie found... </p>
               </div>
               :
               movieApi.map((allmovies) => (
                <ResultMain movies={allmovies} />
               ))
          
          }
       
        </div>
      </section>
    </>
  );
}

export default Main;
