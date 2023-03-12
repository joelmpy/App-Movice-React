import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from '../App'
function Home() {
  const [movieData, setMovieData] = useState([]);
  const {type} = useParams()

  let API_key = "&api_key=d3ca35757329b1e58d8f3e823b92f650";
  let base_url = "https://api.themoviedb.org/3/";
  const Context = useContext(MovieContext)

            useEffect(() => {
              allMovie();
            }, [type]);

              const allMovie = () => {
                let url;
                if(type==="popular")
                {
                    url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
                }
                if(type==="theatre")
                {
                    url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+API_key;
                }
                if(type==="kids")
                {
                    url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
                }
                if(type==="drama")
                {
                    url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
                }
                if(type==="Comedie")
                {
                    url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
                }
      
                fetch(url)
                  .then((reponse) => reponse.json())
                  .then((response) =>{
                    // remplacer ici et changer le state du contexte crée dans app.js
                    Context.setmovieContent(response.results)
                  });
              };

              return (
                <div className="result-container">
                  {Context.movieContent.length === 0 ? (
                    <p className="error">Not false</p>
                  ) : (
                    Context.movieContent.map((res, pos) => {
                      return <Card info={res} key={pos} />;
                    })
                  )}
                </div>
              );
            }

export default Home;
