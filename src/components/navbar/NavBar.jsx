import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
function NavBar() {
  const [activeBtn, setActiveBtn] = useState(`home`);

  const handleActiveBtn = (btn) => {
    setActiveBtn(btn);
  };
  return (
    <nav className=" p-5 w-full text-white fi tems-center">
      <div
        className="box flex
     justify-between  px-12"
      >
        <div className="logo font-bold text-2xl">WeatherWise</div>

        <div className="nav-list">
          <ul className="flex text-lg  ">
            <li
              className={` ${
                activeBtn === "home" && "text-[#f1a20e]"
              } hover:text-[#f1a20e]`}
            >
              <Link to="/" onClick={() => handleActiveBtn("home")}>
                Home
              </Link>
            </li>
            <li
              className={` ${
                activeBtn === "about" && "text-[#f1a20e]"
              } hover:text-[#f1a20e]`}
            >
              <Link to="/about" onClick={() => handleActiveBtn("about")}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
