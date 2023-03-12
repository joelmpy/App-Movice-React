import React from "react";
import { useState, useEffect } from "react"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from '../App.js'


function Navbar() {

  const [Mobile, setMobile] = useState(false)
  const Context = useContext(MovieContext)
  const [search, setSearch] = useState("");
  const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=d3ca35757329b1e58d8f3e823b92f650&query=";


    useEffect(() => {
    if(search === ""){
      getAllMovieData()
    } else {
      getMovie()
    }
  }, [search]);

const getAllMovieData = () => {
  fetch('https://api.themoviedb.org/3//discover/movie?sort_by=popularity.desc&api_key=d3ca35757329b1e58d8f3e823b92f650')
  .then(reponse => reponse.json())
  .then(res => Context.setmovieContent(res.results))
  .catch((error) => {
    console.log(error)
  })
}


const getMovie = () => {
  fetch(SEARCHAPI + search)
  .then(reponse => reponse.json())
  .then(res => Context.setmovieContent(res.results))
  .catch((error) => {
    console.log(error);
  })
}


const handleChange = event => {
  setSearch(event.target.value)
}
  let array = [
    {
      name: "Popular",
      link: "popular",
    },
    {
      name: "Theatre",
      link: "theatre",
    },
    {
      name: "Kids",
      link: "kids",
    },
    {
      name: "Drama",
      link: "drama",
    },
    {
      name: "Comedie",
      link: "Comedie",
    },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <i class="fa-solid fa-camera"></i>
      </div>
      <div className="container-search">
            <div className="content-search-bar">
              <input type="text" placeholder="Rechercher un film..." onChange={handleChange}  />
            </div>
        </div>
      <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
        <li>
          <Link to="/">Home</Link>
        </li>
        {array.map((item) => {
          return (
            <li>
              <Link to={`/${item.link}`}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
      <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
    </nav>
  );
}

export default Navbar;
