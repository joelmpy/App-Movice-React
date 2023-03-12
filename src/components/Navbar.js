import React from "react";
import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { Link } from "react-router-dom";

function Navbar() {

  const [Mobile, setMobile] = useState(false)
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
