import React from "react";
import "./nav.css";
function NavBar() {
  return (
    <nav className=" p-5 w-full text-white fi tems-center">
      <div
        className="box flex
     justify-between "
      >
        <div className="logo font-bold">WeatherWise</div>

        <div className="nav-list">
          <ul className="flex">
            <li className="active">Home</li>
            <li>Contact Us </li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
