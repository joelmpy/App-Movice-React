import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navBar">
      <div className="logo">
        <i class="fa-solid fa-camera"></i>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/Comedie">Comedie</NavLink>
        </li>
        <li>
          <NavLink to="/Drama">Drama</NavLink>
        </li>
        <li>
          <NavLink to="/Kids">Kids</NavLink>
        </li>
        <li>
          <NavLink to="/Serie">Serie</NavLink>
        </li>
        <li>
          <NavLink to="/Popular">Popular</NavLink>
        </li>
      </ul>
      <div className="search-btn">
      <form>
                    <div className="search-btn">
                        {/* <input type="text" placeholder="Enter Movie Name" 
                        className="inputText" onChange={(e)=>{setSearch(e.target.value)}} 
                        value={search} onKeyPress={searchMovie}>
                        </input> */}
                        <button><i className="fas fa-search"></i></button>
                    </div>
                </form>
      </div>
    </nav>
  );
}

export default Navbar;
