import React from "react";
import { Link} from "react-router-dom";

function Navbar() {

  let array = [
    {
      name:"Home",
      link:'popular'
    },
    {
      name:"Theatre",
      link:'theatre'
    },
    {
      name:"Kids",
      link:'kids'
    },
    {
      name:"Drama",
      link:'drama'
    },
    {
      name:"Comedie",
      link:'Comedie'
    },
  ]

  return (
    <nav className="navBar">
      <div className="logo">
        <i class="fa-solid fa-camera"></i>
      </div>
      <ul className="nav-links">
      {
        array.map((item) => {
          return (
            <li>
              <Link to={`/${item.link}`}>{item.name}</Link>
            </li>
          )
        })      }
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
