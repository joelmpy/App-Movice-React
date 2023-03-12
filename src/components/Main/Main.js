import React from "react";
import "./Main.css";
import {useContext} from 'react'
import { MovieContext } from '../../App'
import { useState, useEffect } from "react";
import ResultMain from "../ResultMain";

function Main() {
  const Context = useContext(MovieContext)

  return (
    <>
      <section id="search-bar">
     
        <div className="result-container">
          {
               Context.movieContent.length === 0
               ?
               <div className="new-error">
                <p>sorry no movie found... </p>
               </div>
               :
               Context.movieContent.map((allmovies) => (
                <ResultMain movies={allmovies} />
               ))
          
          }
       
        </div>
      </section>
    </>
  );
}

export default Main;
