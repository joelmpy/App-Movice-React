import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
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
    <nav className="navBar">
      <div className="logo">
        <i class="fa-solid fa-camera"></i>
      </div>
      <ul className="nav-links">
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
    </nav>
  );
}

export default Navbar;
