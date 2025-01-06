import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
function NavBar() {
  return (
    <nav className=" p-5 w-full text-white fi tems-center">
      <div
        className="box flex
     justify-between  px-12"
      >
        <div className="logo font-bold text-2xl">WeatherWise</div>

        <div className="nav-list">
          <ul className="flex text-lg  ">
            <li className="active hover:text-[#f1a20e]">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#f1a20e]">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
